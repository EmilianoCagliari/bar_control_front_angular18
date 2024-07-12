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

  products: any[] = [

    {
      id: 1,
      name: 'Product 1',
      price: 100
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200
    },
    {
      id: 3,
      name: 'Product 2',
      price: 200
    },
    {
      id: 4,
      name: 'Product 2',
      price: 200
    },
    {
      id: 5,
      name: 'Product 2',
      price: 200
    },
    {
      id: 6,
      name: 'Product 2',
      price: 200
    },
    {
      id: 7,
      name: 'Product 2',
      price: 200
    },
    {
      id: 8,
      name: 'Product 2',
      price: 200
    },
    {
      id: 9,
      name: 'Product 2',
      price: 200
    },
    {
      id: 10,
      name: 'Product 2',
      price: 200
    }

  ];
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
