import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav {

  routes: any[] = [
    { title: 'Accueil', path: '/' },

    { title: 'Démonstrations', children: [
      { title: 'Bindings', path: '/demonstrations/demo01' },
      { title: 'Directive', path: '/demonstrations/demo02' },
    ]},

    { title: 'Exercices', children: [
      { title: 'Exercice 01', path: '/exercices/exo01' },
      { title: 'Exercice 02', path: '/exercices/exo02' },
    ]},

  ];

}
