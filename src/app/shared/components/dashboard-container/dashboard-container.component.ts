import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-dashboard-container',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './dashboard-container.component.html',
  styleUrl: './dashboard-container.component.css'
})
export class DashboardContainerComponent {

}
