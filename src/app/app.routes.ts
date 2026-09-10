import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: 'login',
    title: 'Access the Archives',
    loadComponent: () => import('./login/login').then((m) => m.Login),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about').then((m) => m.About),
  },

  {
    path: 'stacks',
    loadChildren: () => import('./stacks/stacks.routes').then((m) => m.stacksRoutes),
  },

  {
    path: 'bookdetails',
    loadComponent: () => import('./bookdetails/bookdetails').then((m) => m.Bookdetails),
  },

  {
    path: 'bookdetails/:id',
    loadComponent: () => import('./bookdetails/bookdetails').then((m) => m.Bookdetails),
  },

  {
    path: 'profile',
    loadComponent: () => import('./profile/profile').then((m) => m.Profile),
  },

  {
    path: 'cart',
    loadComponent: () =>
      import('./shoppingcart-component/shoppingcart-component').then(
        (m) => m.ShoppingcartComponent,
      ),
  },

  {
    path: 'payment',
    loadComponent: () =>
      import('./payment-component/payment-component').then((m) => m.PaymentComponent),
  },

  {
    path: 'registration',
    title: 'Scholar Enrollment',
    loadComponent: () => import('./registration/registration').then((m) => m.Registration),
  },

  {
    path: 'collections',
    loadComponent: () => import('./collections/collections').then((m) => m.CollectionsComponent),
  },

  {
    path: '**',
    redirectTo: '',
  },
];
