import { Routes } from '@angular/router';

export const routes: Routes = [
     {
    path: '',
    loadComponent: () => import('./features/home-component/home-component')
      .then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about-component/about-component')
      .then(m => m.AboutComponent)
  },
  {
    path: 'experience',
    loadComponent: () => import('./features/experience-component/experience-component')
      .then(m => m.ExperienceComponent)
  },
  {
    path: 'projects',
    loadComponent: () => import('./features/projects-component/projects-component')
      .then(m => m.ProjectsComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact-component/contact-component')
      .then(m => m.ContactComponent)
  }
];
