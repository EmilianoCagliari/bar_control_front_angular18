import { Component } from '@angular/core';
import { ButtonComponent } from '../components/button/button.component';
import { CarouselComponent } from '../components/carousel/carousel.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    ButtonComponent,
    CarouselComponent
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  isPasswordNotValid: boolean = false;
  isEmailNotValid: boolean = false;


}
