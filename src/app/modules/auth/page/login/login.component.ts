import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = '';
  password = '';

  authService = inject(AuthService);
  router = inject(Router);

  login(event: Event) {
    event.preventDefault();
    // console.log(`Login: ${this.email} / ${this.password}`);
    this.authService.login({
      email: this.email,
      password:  this.password,
    })
    .subscribe(() => {
      // alert('Login successful');
      this.router.navigate(['/dashboard']);
    })
  }

}
