import { Component } from '@angular/core';
import { ButtonComponent } from '../components/button/button.component';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { AlertComponent } from '../components/alert/alert.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoaderComponent } from '../components/loader/loader.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    AlertComponent,
    ButtonComponent,
    CarouselComponent,
    CommonModule,
    ReactiveFormsModule,
    LoaderComponent
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {


  //Formulario de login
  loginForm: FormGroup;

  isPasswordNotValid: boolean = false;
  isEmailNotValid: boolean = false;

  errorLogin: boolean = false;
  isLoginIn: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
  ) {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

  }

  async onSubmit() {    
    
    this.isLoginIn = true;
    this.isEmailNotValid = !this.loginForm.get('email')?.valid;
    this.isPasswordNotValid = !this.loginForm.get('password')?.valid;

    //Una vez activada la alerta 3 segundos para desaparecer.
    setTimeout(() => {
      this.isEmailNotValid = false;
      this.isPasswordNotValid = false;
      this.isLoginIn = false;
    }, 2000);

    // if (this.loginForm.valid) {

    //   this.isLogin = true;


    //   const email = this.loginForm.get('email')!.value;
    //   const password = this.loginForm.get('password')!.value;

    //   // console.log('loginForm', this.loginForm.value);

    //   this.authService.login(this.loginForm.value)
    //     .subscribe({
    //       next: response => {
    //         // Manejar la respuesta de la solicitud HTTP

    //         this.isLogin = true;
    //         console.log('Respuesta:', response);
    //         setTimeout(() => {
    //           this.isLogin = false;

    //           this.localstorage.setItem("token", response['access_token']);
    //           console.log("LoggedIn", this.authService.isLoggedIn());
    //           this.userService.email = email;

    //           this.router.navigate(['home/inicio']);
    //         }, 2000);

    //       },
    //       error: (err) => {

    //         setTimeout(async () => {
    //           this.isLogin = false;
    //           await this.Toast.fire({
    //             icon: 'error',
    //             title: `${err.error.message}`
    //           })
    //         }, 2000);

    //       }
    //     });
    // }


  }

}
