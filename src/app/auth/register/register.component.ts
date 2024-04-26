import { Component, ElementRef, ViewChild  } from '@angular/core';
import { Router, RouterLink, RouterModule  } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule, HttpClientModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  providers: [RegisterService]
})
export class RegisterComponent {

  @ViewChild('alertDiv') alertDiv!: ElementRef;
  formSucces: boolean = false;
  registerForm: FormGroup;
  

  constructor(
    public registerService: RegisterService,
    private router: Router
  ) {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      numberphone: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmpassword: new FormControl('', [Validators.required]),
    });
  }

  submitForm() {
    if (this.registerForm.valid && (this.registerForm.value.password === this.registerForm.value.confirmpassword)) {
      console.log(this.registerForm.value);
      //const userData = JSON.stringify(this.registerForm.value);
      this.registerService.registerNewUser(this.registerForm.value).subscribe({
        next: res => {
          //alert(res);
          this.formSucces=true;
          //this.alertDiv.nativeElement.classList('show-alert')
          setTimeout(()=>{
            this.router.navigate(['login']);
          } ,2000)
          
        },
        error: err => {
          const jsonTring = JSON.stringify(err);
          //console.log(`${jsonTring}`);  
        }
      })
    }else{
      console.log("no valido");
    }
    
  }

  

}
