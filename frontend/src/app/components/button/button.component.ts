import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() class = '';
  @Input() color: 'primary' | 'secondary' | 'tertiary' | 'medium' | 'white' = 'secondary';
  @Input() textColor: 'primary' | 'secondary' | 'tertiary' | 'medium' | 'white' = 'white';
  @Input() size: 'lg' | 'md' | 'sm' = 'lg';

  @Input() loading = false;


  getButtonClass() {
    return `app-button ${this.size} bg-${this.color} text-${this.textColor} shadow-lg ${this.class}`;
  }

}
