import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/services/auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-jwt-auth';

  // authService = Inject(AuthService);
  
  // inject the authservice in constructor
  constructor (authService: AuthService) {
    authService.login({
      username: 'kminchelle',
      password: '0lelplR',
    }).subscribe((r: any) => console.log(r))
  }
}
