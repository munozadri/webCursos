import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModuleModule } from 'src/app/components/components-module/components-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AboutComponent } from '../about.component';
import { AboutRoutingModule } from './about-routing.module';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    ComponentsModuleModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutModule { }
