import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';import { AppComponent } from './app.component';
import { ComponentsModuleModule } from './components/components-module/components-module.module';
import { LandingModule } from './pages/landing/module/landing.module';
import { AboutModule } from './pages/about/module/about.module';
import { CoursesModule } from './pages/courses/module/courses.module';
import { RegistrationComponent } from './pages/registration/registration.component';
import { RegistrationModule } from './pages/registration/module/module.module';
import { LoginModule } from './pages/login/module/login.module';

@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModuleModule,
    LandingModule,
    AboutModule,     
    CoursesModule,
    RegistrationModule,
    LoginModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
