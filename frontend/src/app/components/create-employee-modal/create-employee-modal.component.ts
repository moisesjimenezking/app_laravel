import { Component, Input, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { CustomFormGroup } from '@/components/form/input/customs/base';
import { FormContainerComponent } from "@/components/form/form-container/form-container.component";
import { CustomInputComponent } from "@/components/form/input/customs/custom-input.component";
import { ModalBase, ModalRef } from '@/lib/modal/modal';
import { ButtonComponent } from "@/components/button/button.component";
import { PATTERNS } from '@/global/patterns.const';
import { DatetimeInputComponent } from "../form/input/customs/datetime-input.component";
import { EmployeeService } from '@/services/employee.service';
import { AlertService } from '@/lib';
import { httpErrorMessageDefault } from '@/global/http.const';

@Component({
  selector: 'app-create-employee-modal',
  standalone: true,
  templateUrl: './create-employee-modal.component.html',
  styleUrl: './create-employee-modal.component.scss',
  imports: [
    ReactiveFormsModule,
    FormContainerComponent,
    CustomInputComponent,
    ButtonComponent,
    DatetimeInputComponent
  ]
})
export class CreateEmployeeModalComponent extends ModalBase implements OnInit {

  @Input() override modalRef!: ModalRef;


  // formulario
  form = new CustomFormGroup({});
  dniType = '';
  country = '';
  area = '';


  // patterns
  namePattern = PATTERNS.NAME;
  namePatternExtend = PATTERNS.NAME_EXTEND;
  dniPattern = PATTERNS.DNI;

  minDate = '';

  isSubmitting = false;

  private readonly employeeService = inject(EmployeeService);
  private readonly alertService = inject(AlertService);


  ngOnInit(): void {
    const d = new Date(new Date().setMonth(new Date().getMonth() - 1)).toISOString().split('.')[0].split(':');
    this.minDate = `${d[0]}:${d[1]}`;
  }

  onSelectDniType(ev: any) {
    this.dniType = ev.target.value;
  }

  onSelectCountry(ev: any) {
    this.country = ev.target.value;
  }

  onSelectArea(ev: any) {
    this.area = ev.target.value;
  }

  onCancel() {
    this.modalRef.dismiss('cancel');
  }

  onRegisterEmployee() {
    this.form.markAllAsTouched();

    if (this.form.invalid || this.dniType == '' || this.country == '' || this.area == '') {

      return;
    }

    const { firstName, otherName, surname, secondSurname, dni, datetime } = this.form.value;

    const date = datetime.split('T')[0];;
    // const time = datetime.split('T')[1].split(':');


    const form: any = {
      firstName,
      surname,
      secondSurname,
      identificationType: this.dniType,
      identificationNumber: dni,
      admissionDate: date,
      country: this.country,
      area: this.area

    };

    if (otherName) {
      form['otherName'] = otherName;
    }

    this.isSubmitting = true;



    this.employeeService.createEmployee(form)
      .subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.modalRef.dismiss('success');
          this.form.reset('');

          this.alertService.present({
            title: 'Nuevo empleado',
            body: `El empleado ${response.user.firstName} ${response.user.surname} ha sido registrado exitosamente.`,
            showCancelButton: false,
            textConfirmButton: 'Aceptar'
          });
        },
        error: (error) => {
          this.alertService.present({
            title: 'Error',
            body: httpErrorMessageDefault,
            showCancelButton: false,
            textConfirmButton: 'Aceptar'
          });
          this.isSubmitting = false;
        }
      })

  }
}
