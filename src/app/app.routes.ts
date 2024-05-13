import { Routes } from '@angular/router';
import { IndexComponent } from './modules/index/pages/index/index.component';

export const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: '**', redirectTo: '' }
];
