import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    { path: 'main', component: MainComponent },
    { path: "auth", component: AuthComponent },
    { path: '**', redirectTo: 'auth', pathMatch: 'full' },
];
