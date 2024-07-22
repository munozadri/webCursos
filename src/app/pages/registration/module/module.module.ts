import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { RegistrationComponent } from '../registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    ModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegistrationModule { }
