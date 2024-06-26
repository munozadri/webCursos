import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from '../landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { ComponentsModuleModule } from 'src/app/components/components-module/components-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    ComponentsModuleModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LandingModule { }
