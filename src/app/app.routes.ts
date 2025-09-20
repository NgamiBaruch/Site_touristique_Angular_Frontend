import { Routes } from '@angular/router';
import { LoginComponent } from './login-component/login-component';
import { MiddleComponent } from './middle-component/middle-component';
import { RegisterComponent } from './register-component/register-component';
import { ServicesClientComponentComponent } from './services-client-component/services-client-component.component';
import { StaReservationComponentComponent } from './sta-reservation-component/sta-reservation-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

export const routes: Routes = [
    {path:'', component: LoginComponent},
    {path:'se connecter', component: MiddleComponent},
    {path:'Accueil', component: MiddleComponent},
    {path:'register', component: RegisterComponent},
    {path:'service' , component: ServicesClientComponentComponent},
    {path:'mesReservations', component: StaReservationComponentComponent},
    {path:'**', component: NotFoundComponentComponent}
];
