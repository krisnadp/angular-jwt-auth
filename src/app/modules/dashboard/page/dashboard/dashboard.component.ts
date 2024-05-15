import { Component, Inject } from '@angular/core';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  user?: any;
  authService = Inject(AuthService);

  constructor() {
    this.authService.getCurrentAuthUser().subscribe((user: any) => {
      console.log(user);
      this.user = user;
    });
  }

}
