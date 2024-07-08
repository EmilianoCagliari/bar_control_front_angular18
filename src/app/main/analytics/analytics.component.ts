import { Component } from '@angular/core';
import { NotFoundComponent } from '../../components/not-found/not-found.component';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [
    NotFoundComponent
  ],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss'
})
export class AnalyticsComponent {

}
