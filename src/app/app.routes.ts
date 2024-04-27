import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { MainComponent } from './components/main/main.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent, children:[
        { path: '', component: MainComponent },
        { path: 'configuration', component: ConfigurationComponent }
    ]},
    
    
];
