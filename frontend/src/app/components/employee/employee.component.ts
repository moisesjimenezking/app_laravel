import { EmployeeModel } from '@/models/employee.model';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';


@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent {
  @Input({ required: true }) data!: EmployeeModel;

  readonly screenWidth = window.screen.availWidth;

  getFullName() {
    const { firstName, surname, secondSurname } = this.data;
    return `${firstName} ${surname} ${secondSurname}`.trim();
  }
}
