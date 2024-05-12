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
  user?: any;
  // authService = Inject(AuthService);

  
  // inject the authservice in constructor
  // constructor (authService: AuthService) {
  //   authService.login({
  //     username: 'kminchelle',
  //     password: '0lelplR',
  //   }).subscribe((r: any) => {
  //       this.authService.getCurrentAuthUser().subscribe((r: any) => {
  //         console.log(r);
  //       })
  //   })
  // }

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.login({
      username: 'kminchelle',
      password: '0lelplR',
    }).subscribe((loginResponse: any) => {
      this.authService.getCurrentAuthUser().subscribe((user: any) => {
        console.log(user);
        this.user = user;
      });
    });
  }

}