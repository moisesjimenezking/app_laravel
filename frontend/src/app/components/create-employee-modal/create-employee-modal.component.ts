import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomFormGroup } from '@/components/form/input/customs/base';
import { FormContainerComponent } from "@/components/form/form-container/form-container.component";
import { EmailInputComponent } from "@/components/form/input/customs/email-input.component";
import { CustomInputComponent } from "@/components/form/input/customs/custom-input.component";
import { ModalBase, ModalRef } from '@/lib/modal/modal';
import { ButtonComponent } from "@/components/button/button.component";

@Component({
  selector: 'app-create-employee-modal',
  standalone: true,
  templateUrl: './create-employee-modal.component.html',
  styleUrl: './create-employee-modal.component.scss',
  imports: [
    ReactiveFormsModule,
    FormContainerComponent,
    EmailInputComponent,
    CustomInputComponent,
    ButtonComponent
  ]
})
export class CreateEmployeeModalComponent extends ModalBase {

  @Input() override modalRef!: ModalRef;

  // formulario
  form = new CustomFormGroup({});
}
