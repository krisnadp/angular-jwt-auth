import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/page/login/login.component';
import { DashboardComponent } from './modules/dashboard/page/dashboard/dashboard.component';
import { authGuard } from './core/guards/auth/auth.guard';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
