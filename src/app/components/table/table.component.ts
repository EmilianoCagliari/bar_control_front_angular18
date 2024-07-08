import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  products: any[] = [];
  loading: boolean = true;

  screenWidth: number;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }

  rowEdit: number | null = null;

  constructor() {
    this.screenWidth = window.innerWidth;
  }

}
