import { Routes } from '@angular/router';
import { LoginComponent } from './login-component/login-component';
import { MiddleComponent } from './middle-component/middle-component';
import { RegisterComponent } from './register-component/register-component';
import { StaReservationComponentComponent } from './sta-reservation-component/sta-reservation-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { ServiceComponent } from './service-component/service-component';
import { FromComponent } from './from-component/from-component';
import { ServicesClientComponentComponent } from './services-client-component/services-client-component.component';
import { ForgetPasswordComponentComponent } from './forget-password-component/forget-password-component.component';
import { AccueilAdminComponent } from './accueil-admin-component/accueil-admin-component.component';
import { AproposComponentComponent } from './apropos-component/apropos-component.component';

export const routes: Routes = [
    {path:'', component: LoginComponent},
    {path:'seConnecter', component: MiddleComponent},
    {path:'Accueil', component: MiddleComponent},
    {path:'register', component: RegisterComponent},
    {path:'service' , component: ServiceComponent},
    {path:'services' , component: ServicesClientComponentComponent},
    {path:'mesReservations', component: StaReservationComponentComponent},
    {path:'reservation', component: FromComponent},
    {path:'DashboardAdmin', component: AccueilAdminComponent},
    {path:'forgetpassword', component: ForgetPasswordComponentComponent},
    {path:'APropos', component: AproposComponentComponent},
    {path:'**', component: NotFoundComponentComponent}
];
