import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [LoginService]
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    public loginService: LoginService,
    private router: Router
  ){
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }


  onLogin(){
    this.loginService.loginUser(this.loginForm.value)
      .subscribe({
        next: res =>{ 
          console.log("Successfully logged in"); 
          this.router.navigate(['/home']);
        },
        error: error=>{ console.error(`Error logging in ${error}`);}
  })
  }

}
