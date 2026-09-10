import { Routes } from '@angular/router';

export const home: Routes = [
    {path:'home',loadComponent:()=>import('./home').then((m)=>m.Home)},
    {
        path: '',
        loadComponent: () =>
            import('./home').then(
                (m) => m.Home
            )
    },
    {
        path: 'bookdetails/:id',
        loadComponent: () =>
            import('../bookdetails/bookdetails')
                .then(m => m.Bookdetails)
    }
];