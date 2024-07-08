import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { ProductsComponent } from './main/products/products.component';
import { RegisterComponent } from './main/register/register.component';
import { AnalyticsComponent } from './main/analytics/analytics.component';
import { SettingsComponent } from './main/settings/settings.component';

export const routes: Routes = [
    { 
        path: 'main', component: MainComponent, 
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'products', component: ProductsComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'analytics', component: AnalyticsComponent },
            { path: 'settings', component: SettingsComponent }
        ],
    },
    { path: "auth", component: AuthComponent },
    { path: '**', redirectTo: 'auth', pathMatch: 'full' },
];
