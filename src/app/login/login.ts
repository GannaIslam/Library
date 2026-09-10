import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit, OnDestroy {

  email = '';

  password = '';

  errorMessage = '';


  ngOnInit(): void {
    console.log('Login component initialized');
  }


  ngOnDestroy(): void {
    console.log('Login component destroyed');
  }


  enterVault(): void {

    if (!this.email || !this.password) {

      this.errorMessage = 'Please enter both your email and passphrase.';

      return;
    }

    this.errorMessage = '';

    console.log('Entering vault with:', this.email);

    this.router.navigate(['/home']);
  }


  constructor(private router: Router) {}

}