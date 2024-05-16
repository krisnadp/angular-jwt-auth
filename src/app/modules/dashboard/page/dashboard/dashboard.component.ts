import { Component, Inject } from '@angular/core';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from '../../../../shared/components/sidenav/sidenav.component';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    SidenavComponent,
    NavbarComponent,
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
