import { Component } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-abm',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent
  ],
  templateUrl: './abm.component.html',
  styleUrl: './abm.component.scss'
})
export class AbmComponent {

  items: any[] = [1,2,3,4,5,6,7,8,9];

  constructor() { }

  

  
}
