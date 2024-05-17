import { Component, OnInit, inject } from '@angular/core';

import { EmployeeComponent } from '@/components/employee/employee.component';
import { ButtonComponent } from '@/components/button/button.component';
import { EmployeeService } from '@/services/employee.service';
import { ModalService } from '@/lib';
import { CreateEmployeeModalComponent } from '../create-employee-modal/create-employee-modal.component';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    ButtonComponent,
    EmployeeComponent
  ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent implements OnInit {


  private readonly employeeService = inject(EmployeeService);
  private readonly modalService = inject(ModalService);

  ngOnInit(): void {
    this.employeeService.getEmployees()
      .subscribe({
        next: (response) => {
          console.log("Response employee ", response);
        },
        error: (error) => {
          console.log("Error employee ", error);
        }
      })
  }


  async onRegisterEmployee() {
    await this.modalService.open({
      component: CreateEmployeeModalComponent,
    })
  }
}
