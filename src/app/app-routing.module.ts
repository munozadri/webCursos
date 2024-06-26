import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { AboutComponent } from './pages/about/about.component';
import { CoursesComponent } from './pages/courses/courses.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: LandingComponent,
    loadChildren: () => import('../app/pages/landing/module/landing.module').then((m) => m.LandingModule)
  },
  {
    path: 'nosotros',
    component: AboutComponent,
    loadChildren: () => import('../app/pages/about/module/about.module').then((m) => m.AboutModule)
  },
  {
    path: 'cursos',
    component: CoursesComponent,
    loadChildren: () => import('./pages/courses/module/courses.module').then((m) => m.CoursesModule)
  },
  
  // Otras rutas
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
