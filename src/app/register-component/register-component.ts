import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; //  IMPORT NÉCESSAIRE
import { Router, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common'; // Pour utiliser *ngIf
import { RegisterService } from '../services/register.service'; //  Votre service

@Component({
 selector: 'app-register-component',
 standalone: true, // Hypothèse: composant autonome
 imports: [RouterModule, ReactiveFormsModule, CommonModule], //AJOUT DE ReactiveFormsModule et CommonModule
 templateUrl: './register-component.html',
 styleUrl: './register-component.css'
})
export class RegisterComponent implements OnInit {

  signupForm!: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private fb: FormBuilder, 
    private registerService: RegisterService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Initialisation du formulaire réactif
    this.signupForm = this.fb.group({
      // L'attribut du contrôle doit correspondre à `name`, `prenom`, etc., du HTML
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', Validators.required], // Sera validé après
      preference: [''], // Champ optionnel ou sans validation stricte ici

      role: ['ROLE_CLIENT'],
    }, { 
      // Optionnel: Ajouter un validateur personnalisé pour la confirmation de mot de passe
      validators: this.passwordMatchValidator
    });
  }

  // Fonction de validation pour vérifier si les mots de passe correspondent
  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value 
      ? null : { 'mismatch': true };
  }

  onSubmit(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (this.signupForm.invalid) {
      this.errorMessage = 'Veuillez vérifier les informations du formulaire.';
      return;
    }

    // Préparation de l'objet de requête (le champ `confirmPassword` est ignoré)
    const requestData = {
      name: this.signupForm.value.name,
      username: this.signupForm.value.username,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
      preference: this.signupForm.value.preference,
      role: this.signupForm.value.role,
      // NOTE : Si UserRequestDTO dans Spring Boot nécessite d'autres champs (ex: username), 
      // vous devrez les ajouter ici ou dans le formulaire.
    };

    this.registerService.register(requestData).subscribe({
      next: (response) => {
        this.successMessage = 'Inscription réussie ! Vous pouvez maintenant vous connecter.';
        this.signupForm.reset();
        
        // Redirection vers la page de connexion après un court délai
        setTimeout(() => {
          this.router.navigate(['/']); 
        }, 2000);
      },
      error: (error) => {
        // Affiche l'erreur du backend (ex: email déjà utilisé)
        const errorMsg = error.error || 'Erreur lors de l\'inscription. Veuillez réessayer.';
        this.errorMessage = errorMsg;
        console.error('Erreur d\'inscription:', error);
      }
    });
  }
}