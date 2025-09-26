// src/app/forget-password-component/forget-password-component.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { ChangePasswordService, ChangePasswordRequest } from '../services/change-password.service'; // ⬅️ NOUVEAU SERVICE

@Component({
 selector: 'app-forget-password-component',
 standalone: true, // Hypothèse: composant autonome
 imports: [ReactiveFormsModule, RouterModule, CommonModule], 
 templateUrl: './forget-password-component.component.html',
 styleUrl: './forget-password-component.component.css'
})
export class ForgetPasswordComponentComponent implements OnInit {
  
  changePasswordForm!: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private changePasswordService: ChangePasswordService, // ⬅ Injection du nouveau service
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initialisation du FormGroup (s'aligne avec formControlName du HTML)
    this.changePasswordForm = this.fb.group({
      username: ['', Validators.required],
      // 'password' correspond à l'ancien mot de passe
      password: ['', Validators.required], 
      // 'lastPassword' correspond au nouveau mot de passe
      lastPassword: ['', [Validators.required]]
    });
  }
  
  onSubmit(): void {
    this.successMessage = '';
    this.errorMessage = '';
    
    if (this.changePasswordForm.invalid) {
      this.errorMessage = 'Veuillez remplir tous les champs correctement.';
      return;
    }
    
    const formValue = this.changePasswordForm.value;
    
    const request: ChangePasswordRequest = {
      username: formValue.username,
      currentPassword: formValue.password, 
      newPassword: formValue.lastPassword 
    };
    
    // Appel du service
    this.changePasswordService.changePassword(request).subscribe({
      next: (response) => {
        this.successMessage = 'Mot de passe changé avec succès ! Vous pouvez maintenant vous connecter.';
        this.changePasswordForm.reset();
        
        // Redirection vers la connexion après 3 secondes
        setTimeout(() => {
          this.router.navigate(['/']); 
        }, 3000);
      },
      error: (error) => {
        // Affiche l'erreur du backend (ex: "Mot de passe actuel invalide")
        const errorMsg = error.error || 'Erreur inconnue lors de la réinitialisation.';
        this.errorMessage = errorMsg;
        console.error('Erreur:', error);
      }
    });
  }
}