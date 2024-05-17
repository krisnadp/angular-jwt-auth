import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { initFlowbite, Collapse  } from 'flowbite';


@Component({
  selector: 'app-dashboard-navbar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './dashboard-navbar.component.html',
  styleUrl: './dashboard-navbar.component.css'
})


export class DashboardNavbarComponent implements OnInit {

  ngOnInit(): void {
    initFlowbite();
  }

}
