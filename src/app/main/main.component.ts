import { Component, OnInit } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';
import { LocalstorageService } from '../services/storage/localstorage.service';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ 
    AuthComponent, 
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{

  scaleConected: boolean = false;
  currentUrl: string = '';

  productBtn: boolean = false;


  constructor(
    private localstorage: LocalstorageService,
    private router: Router,
    private userService: UserService

  ) { 
    this.userService.getUserInfo().subscribe({
      next: (data) => {
        console.log("userData:", data);
      }
    })
  }

  ngOnInit(): void {
   
  }


  logout() {

    Swal.fire({
      title: 'Desea cerrar su sesión?',
      background: '#ECECFC',
      icon: 'question',
      iconColor: '#1B1A5B',
      confirmButtonText: 'Salir',
      confirmButtonColor: '#D30E0E',
      showDenyButton: true,
      denyButtonColor: '#2F2DA0',
      denyButtonText: `Cancelar`,
      color: '#1B1A5B',
      allowOutsideClick: false

    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        // this.webSocketService.exitSocketConn();
        this.localstorage.clearData();
        this.router.navigate(['/auth'], { replaceUrl: true });

      }
    })

  }



}
