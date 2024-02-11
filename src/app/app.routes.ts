import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: TaskListComponent,
        title: 'Tareas',
        canActivate: [authGuard]
    },
    {
        path: 'add-task',
        component: AddTaskComponent,
        title: 'Agregar tarea',
        canActivate: [authGuard]
    },
    {
        path: 'edit-task/:id',
        component: EditTaskComponent,
        title: 'Editar tarea',
        canActivate: [authGuard]
    },
    {
        path: 'login',
        component: LoginComponent,
    }
];
