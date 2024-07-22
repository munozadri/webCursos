import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
public videos = [
    { 
      id: 1,
      title: 'Introducción al curso',
      videoUrl: '../../assets/cursoProgramacion/Introduccion_funciones.mkv',      
    },
    { 
      id: 2,
      title: 'Introducción a DAX. ',
      videoUrl: '../../assets/cursoProgramacion/Conexion_CSV.mkv', 
    },
    // { 
    //   id: 3,
    //   title: 'Fundamentos de DAX',
    //   videoUrl: '../../assets/cursoProgramacion/video1.mp4',
    // },
    // { 
    //   id: 4,
    //   title: 'Funciones de filtrado y contexto de fila en DAX.',
    //   videoUrl: '../../assets/cursoProgramacion/video1.mp4',    
    // },
    // { 
    //   id: 5,
    //   title: 'Funciones de agregación y cálculos de tablas.',
    //   videoUrl: '../../assets/cursoProgramacion/video1.mp4',   
    // },
    // { 
    //   id: 5,
    //   title: 'Manipulación avanzada de datos con DAX.',
    //   videoUrl: '../../assets/cursoProgramacion/video1.mp4',   
    // },
    // { 
    //   id: 5,
    //   title: 'Integración de DAX con Power BI y Excel.',
    //   videoUrl: '../../assets/cursoProgramacion/video1.mp4',   
    // },
    // { 
    //   id: 5,
    //   title: 'Optimización de rendimiento y mejores prácticas en DAX.',
    //   videoUrl: '../../assets/cursoProgramacion/video1.mp4',   
    // }
];

  constructor() { }

  getVideos() {
    return this.videos;
  }

  getVideoById(id: number) {
    return this.videos.find(video => video.id === id);
  }
}