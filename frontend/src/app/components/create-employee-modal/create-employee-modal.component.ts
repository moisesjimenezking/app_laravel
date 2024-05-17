import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { CustomFormGroup } from '@/components/form/input/customs/base';
import { FormContainerComponent } from "@/components/form/form-container/form-container.component";
import { CustomInputComponent } from "@/components/form/input/customs/custom-input.component";
import { ModalBase, ModalRef } from '@/lib/modal/modal';
import { ButtonComponent } from "@/components/button/button.component";
import { PATTERNS } from '@/global/patterns.const';
import { DatetimeInputComponent } from "../form/input/customs/datetime-input.component";

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
export class CreateEmployeeModalComponent extends ModalBase {

  @Input() override modalRef!: ModalRef;

  // formulario
  form = new CustomFormGroup({});


  // patterns
  namePattern = PATTERNS.NAME;
  namePatternExtend = PATTERNS.NAME_EXTEND;
  dniPattern = PATTERNS.DNI;

}
