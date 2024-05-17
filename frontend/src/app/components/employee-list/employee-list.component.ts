import { EmployeeModel } from '@/models/employee.model';
import { Component, OnInit, inject } from '@angular/core';

import { EmployeeComponent } from '@/components/employee/employee.component';
import { ButtonComponent } from '@/components/button/button.component';
import { EmployeeService } from '@/services/employee.service';
import { AlertService, ModalService } from '@/lib';
import { CreateEmployeeModalComponent } from '../create-employee-modal/create-employee-modal.component';
import { httpErrorMessageDefault } from '@/global/http.const';

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
  private readonly alertService = inject(AlertService);

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
    const { reason, data } = await this.modalService.open({
      component: CreateEmployeeModalComponent,
    });

    console.log("reason", reason, data);

    if (reason == 'success') {
      this.getEmployees();
    }

  }

  onDeleteEmployee(id: number) {

    this.employeeService.deleteEmployee(id)
      .subscribe({
        next: (response) => {
          this.alertService.present({
            title: 'Exito',
            body: 'El empleado ha sido eliminado exitosamente',
            showCancelButton: false,
            textConfirmButton: 'Cerrar'
          });

          this.getEmployees();

        },
        error: (error) => {
          this.alertService.present({
            title: 'Error',
            body: httpErrorMessageDefault,
            showCancelButton: false,
            textConfirmButton: 'Aceptar'
          });
        }
      })
  }
}
