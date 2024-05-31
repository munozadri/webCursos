import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public courses: any[] = [];
  public more: boolean = false;

  ngOnInit(): void {   
    this.courses.push(
      {
      id: 1,
      img:"../../../assets/img/sqlServer.jpg",
      more: false,
      title: 'DAX (Data Analysis Expressions)',
      time: '14hs',
      module:'30 módulos',
      price:'11.99 USD',
      subtitle: 'Este curso introductorio de DAX está diseñado para proporcionar a los participantes una comprensión sólida de esta potente fórmula de análisis de datos utilizada en Microsoft Power BI y Excel Power Pivot.',
      text_a:'1.Introducción a DAX y su importancia en el análisis de datos.',
      text_b:'2.Fundamentos de DAX: funciones básicas y operadores.',
      text_c:'3.Funciones de filtrado y contexto de fila en DAX.',
      text_d:'4.Funciones de agregación y cálculos de tablas.',
      text_e:'5.Manipulación avanzada de datos con DAX.',
      text_f:'6.Integración de DAX con Power BI y Excel.',
      text_g:'7.Optimización de rendimiento y mejores prácticas en DAX.',
   
      },
      {
        id: 2,
        img:"../../../assets/img/sqlprincipiante.png",
        more: false,
        title: 'SQL Programación Avanzada',
        time: '6hs',
        module:'25 módulos',
        price:'11.99 USD',
        subtitle: 'Este curso de SQL avanzado está diseñado para personas con experiencia previa en SQL que deseen llevar sus habilidades al siguiente nivel. Desde consultas complejas hasta optimizaciones.',
        text_a:'1.Revisión de los fundamentos de SQL.',
        text_b:'2.Consultas avanzadas: joins, subconsultas y expresiones comunes de tabla.',
        text_c:'3.Trabajando con datos JSON y XML.',
        text_d:'4.Creación y administración de índices.',
        text_e:'5.Optimización de consultas y rendimiento.',
        text_f:'6.Transacciones y control de concurrencia.',
        text_g:'7.Procedimientos almacenados avanzados y programación con T-SQL.',
      },    
      {
        id: 3,
        img:"../../../assets/img/dax.png",
        more: false,
        title: 'SQL Programación Principiante',
        time: '3hs',
        module:'17 módulos',
        price:'9.99 USD',
        subtitle: 'Este curso de SQL está diseñado para personas sin experiencia previa en bases de datos o lenguaje SQL. A lo largo del curso, los participantes aprenderán los fundamentos de SQL.',
        text_a:'1.Introducción a las bases de datos y SQL.',
        text_b:'2.Creación de bases de datos y tablas.',
        text_c:'3.Inserción, actualización y eliminación de datos.',
        text_d:'4.Consultas básicas: SELECT statement.',
        text_e:'5.Filtrado de datos con WHERE clause.',
        text_f:'6.Ordenamiento de resultados con ORDER BY clause.',
        text_g:'7.Funciones básicas de SQL: COUNT, AVG, SUM, etc.',
      }
    )
  }

  moreDetails(courseId: number) {   
    this.courses.forEach(course => {
      if (course.id === courseId) {
        course.more = !course.more; 
      } else {
        course.more = false; 
      }
    });
  } 

}
