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
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentRoute = event.url;
      if(this.currentRoute == '/inicio'){
        this.showHeader = true;
      }else{
        this.showHeader = false;
      }      
    });
  }
  

  ngOnInit(): void {
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
      }
    )
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
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
    }

  }

}
