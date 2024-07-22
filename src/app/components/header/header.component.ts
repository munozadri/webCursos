import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public navList: any[] = [];
  public isDesktop: boolean = false;
  public isMobile: boolean = false;
  public currentRoute: string = '';
  public showHeader: boolean = false;

  constructor(
    private router: Router
  ){
    this.checkHeader();       
  }
  

  ngOnInit(): void {
    this.checkHeader();   
    this.checkScreenWidth();
    this.navList.push(
      {
        id:1,
        title: 'Inicio',
      },
      {
        id:2,
        title: 'Nosotros',
      },
      {
        id:3,
        title: 'Cursos',
      },
      {
        id:4,
        title: 'Registrarse',
      },
      {
        id:5,
        title: 'Iniciar Sesión',
      }
    )
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }

  checkHeader(){
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentRoute = event.url;
      console.log(this.currentRoute)
      if(this.currentRoute == '/inicio' || this.currentRoute == '/'  ){
        this.showHeader = true;
      }else{
        this.showHeader = false;
      }      
    });
  }

  checkScreenWidth() {
    const screenWidth = window.innerWidth;
    this.isDesktop = screenWidth >= 992;
    this.isMobile = screenWidth < 991;
    console.log(this.isDesktop, this.isMobile)
  }

  goToMenu(id: number){   
    switch(id){
      case 1:{
        this.router.navigateByUrl('/inicio');
      }
      break;
      case 2:{
        this.router.navigateByUrl('/nosotros');
      }
      break;
      case 3:{
        this.router.navigateByUrl('/cursos');
      }
      break;
      case 4:{
        this.router.navigateByUrl('/registro');
      }
      break;
    }

  }

}
