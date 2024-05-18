import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { AuthService } from '../../../core/services/auth/auth.service';


@Component({
  selector: 'app-dashboard-navbar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './dashboard-navbar.component.html',
  styleUrl: './dashboard-navbar.component.css'
})


export class DashboardNavbarComponent implements OnInit {

  ngOnInit(): void {
    initFlowbite();
  }

  user?: any;
  // authService = Inject(AuthService);

  constructor(private authService: AuthService) {
    this.authService.getCurrentAuthUser().subscribe((user: any) => {
      // console.log(user);
      this.user = user;
    });
  }

}
