import { Routes } from '@angular/router';

export const stacksRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./stacks').then(
        (m) => m.Stacks
      )
  },
  {
    path: 'book/:id',
    loadComponent: () =>
      import('../bookdetails/bookdetails').then(
        (m) => m.Bookdetails
      )
  }
];