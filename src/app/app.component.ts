import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webCursos';
  public whatsappNumber = '541165291477'

  openWA(){
    const whatsappUrl = `https://wa.me/send?phone=${this.whatsappNumber}&text=Hola, quiero solicitar un curso`;
    window.open(whatsappUrl, '_blank');
  }
}
