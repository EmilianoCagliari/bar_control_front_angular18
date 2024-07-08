import { Component, ViewChild } from '@angular/core';
import { ButtonComponent } from '../components/button/button.component';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { AlertComponent } from '../components/alert/alert.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoaderComponent } from '../components/loader/loader.component';
import { AuthService } from '../services/auth/auth.service';
import { LocalstorageService } from '../services/storage/localstorage.service';
import { Router } from '@angular/router';

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

  isLoginIn: boolean = false;

  //Alert de error
  @ViewChild('alert') alert!: AlertComponent;
  errorLogin: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private localstorage: LocalstorageService,
    private router: Router
  ) {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.authService.test()
      .subscribe({
        next: response => {
          console.log('Respuesta:', response);
        },
        error: error => {
          console.log('Error:', error.error.error);
        }
      });

  }

  async onSubmit() {

    this.isEmailNotValid = !this.loginForm.get('email')?.valid;
    this.isPasswordNotValid = !this.loginForm.get('password')?.valid;

    //Una vez activada la alerta 3 segundos para desaparecer.
    setTimeout(() => {
      this.isEmailNotValid = false;
      this.isPasswordNotValid = false;
    }, 2000);

    if (this.loginForm.valid) {

      this.isLoginIn = true;

      const email = this.loginForm.get('email')!.value;
      const password = this.loginForm.get('password')!.value;

      this.authService.login(email, password)
        .subscribe({
          next: (response: any) => {
            // Manejar la respuesta de la solicitud HTTP
            console.log('Respuesta:', response);
            this.isLoginIn = false;

            let data:Map<string, string> = new Map<string, string>();
            data.set('token', response['token']);
            data.set('expiresIn', response['expiresIn']);

            let jsonData = JSON.stringify(Object.fromEntries(data));


            this.localstorage.setItem("barcontrol", jsonData);     

            this.router.navigate(['/main/home'], { replaceUrl: true });

          },
          error: (err) => {

            this.isLoginIn = false;

            this.alert.msg = err.error.description;
            this.errorLogin = true;


            setTimeout(() => {
              this.errorLogin = false;
            }, 2000);

          }
        });



    }


  }

}
