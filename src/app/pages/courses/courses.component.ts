import { Component } from '@angular/core';
import { VideoService } from './services/serviceVideos';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  videos: any[] = [];
  selectedVideo: any;
  tabs:any[] = [];
  activeTab: any = '1';
  open: boolean = false;
  activeSeccionOne:boolean = true;
  activeSeccionTwo:boolean = false;
  activeSeccionThree:boolean = false;
  accordionItems = [
    { id: 1, title: 'Sección 1 - Introducción',  open: true },
    { id:2, title: 'Sección 2 - Funciones',  open: false },
    { id:3, title: 'Sección 3 - Integración DAX', open: false }
  ];

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.videos = this.videoService.getVideos();
    this.tabs.push(
      {
        id:1,
        title:'DAX',
        active: false
      },
      {
        id:2,
        title: 'SQL Avanzado',
        active: false        
      },
      {
        id:3,
        title:'SQL Principiantes',
        active: false
      }    
    );

    this.playVideo(1);
  }

  playVideo(id: number) {
    this.selectedVideo = this.videoService.getVideoById(id); 
  }

  active(id: number) {
    console.log(id)
    this.tabs.forEach(tab => {
      tab.active = (tab.id === id);
      this.activeTab = id;

    });
  }

  activeAccordion(id:any) {
      console.log(id)
      switch(id){
        case 1:
          this.activeSeccionOne = true;
          this.activeSeccionTwo = false;
          this.activeSeccionThree = false;
        break;
        case 2:
          this.activeSeccionOne = false;
          this.activeSeccionTwo = true;
          this.activeSeccionThree = false;
        break;
        case 3:
          this.activeSeccionOne = false;
          this.activeSeccionTwo = false;
          this.activeSeccionThree = true;
        break;
      }
    // this.accordionItems.forEach(tab => {
    //   tab.open = (tab.id === id);
    //   this.activeTab = id;
    // });
  }
}
