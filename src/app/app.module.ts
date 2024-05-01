import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';import { AppComponent } from './app.component';
import { ComponentsModuleModule } from './components/components-module/components-module.module';
import { LandingModule } from './pages/landing/module/landing.module';

@NgModule({
  declarations: [
    AppComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModuleModule,
    LandingModule     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
