import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

type BColor = 'primary' | 'secondary' | 'tertiary' | 'medium' | 'dark' | 'white' | 'transparent';

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
  @Input() color: BColor = 'secondary';
  @Input() textColor: BColor = 'white';
  @Input() size: 'lg' | 'md' | 'sm' = 'lg';

  @Input() loading = false;


  getButtonClass() {
    return `app-button ${this.size} bg-${this.color} text-${this.textColor} shadow-lg ${this.class}`;
  }

}
