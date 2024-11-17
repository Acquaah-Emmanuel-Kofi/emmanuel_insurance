import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss',
})
export class InputFieldComponent {
  type = input<'text' | 'number' | 'select' | 'textarea' | 'date'>('text');
  label = input<string>('');
  placeholder = input<string>('');
  value = input<string | number>('');
  options = input<{ label: string; value: string }[]>([]);

  control = input<FormControl | AbstractControl | any>();
  valueChange = output< string | number>()

  onValueChange(event: Event) {
    const input = event.target as HTMLInputElement | HTMLTextAreaElement;
    this.valueChange.emit(input.value);
  }
}
