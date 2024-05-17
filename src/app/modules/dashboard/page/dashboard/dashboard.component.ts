import { Component, Inject } from '@angular/core';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { DashboardNavbarComponent } from '../../../../shared/components/dashboard-navbar/dashboard-navbar.component';
import { DashboardContainerComponent } from '../../../../shared/components/dashboard-container/dashboard-container.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    DashboardNavbarComponent,
    DashboardContainerComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  user?: any;
  // authService = Inject(AuthService);

  constructor(private authService: AuthService) {
    this.authService.getCurrentAuthUser().subscribe((user: any) => {
      console.log(user);
      this.user = user;
    });
  }

}
