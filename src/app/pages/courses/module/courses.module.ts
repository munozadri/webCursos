import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CoursesComponent } from '../courses.component';
import { ComponentsModuleModule } from 'src/app/components/components-module/components-module.module';
import { CoursesRoutingModule } from './courses-routing.module';

@NgModule({
  declarations: [CoursesComponent],
  imports: [
    CommonModule,   
    ComponentsModuleModule,
    CoursesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CoursesModule { }
