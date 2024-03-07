import { Component, input } from '@angular/core';

@Component({
  selector: 'fui-metric',
  standalone: true,
  templateUrl: './metric.component.html'
})
export class MetricComponent {
  label = input('');
  value = input('');
  changeValue = input('');
  changePositive = input<boolean | null>(null);
}
