

import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent), title: 'home' },
    { path: "projects", loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent), title: 'projects' },
    { path: "**", loadComponent: () => import('./pages/notfound/notfound.component').then(m => m.NotfoundComponent), title: 'notfound' }
];
