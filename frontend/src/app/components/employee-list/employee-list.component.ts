import { EmployeeModel } from '@/models/employee.model';
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

  employees: EmployeeModel[] = [];

  isLoading = false;

  private readonly employeeService = inject(EmployeeService);
  private readonly modalService = inject(ModalService);

  ngOnInit(): void {
    this.getEmployees();
  }


  getEmployees() {
    this.isLoading = true;

    this.employeeService.getEmployees()
      .subscribe({
        next: (response) => {
          this.employees = response.data;
          this.isLoading = false;
        },
        error: (error) => {
          this.isLoading = false;
        }
      })
  }


  async onRegisterEmployee() {
    await this.modalService.open({
      component: CreateEmployeeModalComponent,
    })
  }
}
