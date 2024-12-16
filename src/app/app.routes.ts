import { RouterModule, Routes } from '@angular/router';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './auth.guard';
import { ServicesComponent } from './services/services.component';
import { UserDetailsComponent } from './user-details/user-details.component';

export const routes: Routes = [
    {
        path:'home',
        component : CreateTodoComponent,
    },
    {
        path:'services',
        component : ServicesComponent
    },
    {
        path : 'user-details',
        component : UserDetailsComponent
    },
    {
        path : ' ',
        component : CreateTodoComponent

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