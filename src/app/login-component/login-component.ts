import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule,RouterModule],
  templateUrl: './login-component.html',
  styleUrl:'./login-component.css'
  
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private router: Router
    
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      this.authService.login(username, password).subscribe({
        next: () => {

          if(this.authService.hasRole('ROLE_ADMIN')){
            this.router.navigate(['/DashboardAdmin']); // redirige vers la page d’accueil
          }
          if(this.authService.hasRole('ROLE_CLIENT')){
            this.router.navigate(['/Accueil']);
          }
          else if(this.authService.hasRole('ROLE_AGENT')){

            this.router.navigate(['/Accueil'])

          }
        },
        error: () => {
          this.errorMessage = 'Nom d’utilisateur ou mot de passe incorrect';
        }
      });
    }
  }
}
