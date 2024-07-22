import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  LoginForm: FormGroup;

  constructor(private fb: FormBuilder,
  ) {
    this.LoginForm = this.fb.group({
      usuario: ['', Validators.required],        
      password: ['', [Validators.required, Validators.minLength(6)]],  
    }, {
     // validators: this.passwordMatchValidator
    });
  }

  submitForm() {
    if (this.LoginForm.valid) {
      const formData = this.LoginForm.value;
      console.log('Formulario enviado con éxito', formData);      
   
      // Aquí puedes agregar la lógica para enviar los datos a tu servicio o hacer cualquier otra acción necesaria
    }
  }
}
