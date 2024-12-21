import { RouterModule, Routes } from '@angular/router';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './auth.guard';
import { ServicesComponent } from './services/services.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginComponent } from './login/login/login.component';

export const routes: Routes = [
    {
        path:'home',
        component : CreateTodoComponent,
        canActivate:[authGuard]
    },
    {
        path:'services',
        loadComponent :() => import('../app/services/services.component').then(m => m.ServicesComponent),
        // component : ServicesComponent
    },
    {
        path:'product-details/:id',
        loadComponent :()=> import('../app/product-details/product-details.component').then(c=>c.ProductDetailsComponent),
    },
    {
        path : 'user-details',
        component : UserDetailsComponent
    },
    {
        path :'search',
        loadComponent :() => import('../app/search-box/search-box.component').then(c => c.SearchBoxComponent)
    },
    {
        path : 'login',
        component : LoginComponent

    },
    {
        path: '**',
        component: NotFoundComponent   , 
        // canActivate: [authGuard]
    }
];

// NgModule({
//     imports : [RouterModule.forRoot(routes)],
//     exports :[RouterModule]
// });