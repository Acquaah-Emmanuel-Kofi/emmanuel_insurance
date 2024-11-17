import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { provideNativeDateAdapter } from '@angular/material/core';
import { InputFieldComponent } from '../../../../../../shared/components/input-field/input-field.component';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-dairy-form',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    InputFieldComponent,
  ],
  templateUrl: './dairy-form.component.html',
  styleUrl: './dairy-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DairyFormComponent {
  dialogRef = inject<DialogRef<string>>(DialogRef<string>);

  typeOptions: { label: string; value: string }[] = [
    { label: 'Type 1', value: 'type1' },
    { label: 'Type 2', value: 'type2' },
  ];

  priorityOptions: { label: string; value: string }[] = [
    { label: 'High', value: 'high' },
    { label: 'Medium', value: 'medium' },
    { label: 'Low', value: 'low' },
  ];

  form: FormGroup;
  private _formBuilder = inject(FormBuilder);

  constructor() {
    this.form = this._formBuilder.group({
      type: ['', Validators.required],
      title: ['', Validators.required],
      priority: ['', Validators.required],
      dueDate: ['', Validators.required],
      description: [''],
      confidential: [false],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted: ', this.form.value);
    }
  }

  onCancel() {
    this.form.reset()
    this.dialogRef.close();
  }
}
