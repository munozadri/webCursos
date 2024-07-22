import { Component, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router
  ) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
     // validators: this.passwordMatchValidator
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.registroForm.valid) {
      const formData = this.registroForm.value;
      console.log('Formulario enviado con éxito', formData);
      this.go();
      // Aquí puedes agregar la lógica para enviar los datos a tu servicio o hacer cualquier otra acción necesaria
    }
  }

  go(){
    this.router.navigateByUrl('/login');
  }

  // passwordMatchValidator(control: AbstractControl) {
  //   const password = control.get('password')?.value;
  //   const confirmPassword = control.get('confirmPassword')?.value;

  //   if (password !== confirmPassword) {
  //     control.get('confirmPassword')?.setErrors({ passwordMismatch: true });
  //   } else {
  //     return null;
  //   }
  // }
}
