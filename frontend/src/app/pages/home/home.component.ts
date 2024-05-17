import { Component } from '@angular/core';

import { EmployeeListComponent } from '@/components/employee-list/employee-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EmployeeListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
