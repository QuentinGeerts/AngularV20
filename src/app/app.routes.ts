import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: 'home', 
    loadComponent: () => import("./features/home/home").then(c => c.Home) 
  },

  // Démonstrations
  {
    path: 'demonstrations',
    loadComponent: () => import("./features/demonstrations/demonstrations").then(c => c.Demonstrations),
    children: [
      { path: 'demo01', loadComponent: () => import("./features/demonstrations/demo01/demo01").then(c => c.Demo01) },
      { path: 'demo02', loadComponent: () => import("./features/demonstrations/demo02/demo02").then(c => c.Demo02) },
    ]
  },
  
  // // Exercices
  // {
  //   path: 'demonstrations',

  // },

  { 
    path: '', 
    pathMatch: 'full', 
    redirectTo: 'home' 
  }
];
