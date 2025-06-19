import {
  Component,
  Input,
  forwardRef,
  HostListener,
  OnInit
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  ControlValueAccessor,
  Validator,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import {
  NgClass,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault
} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'wellsfargo-custom-control-input',
  standalone: true,
  templateUrl: './custom-input-control.component.html',
  styleUrls: ['./custom-input-control.component.css'],
  imports: [
    NgClass,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputControlComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomInputControlComponent),
      multi: true
    }
  ]
})
export class CustomInputControlComponent
  implements ControlValueAccessor, Validator, OnInit {
  @Input() type: 'text' | 'textarea' | 'radio' | 'check' | 'datetime' = 'text';
  @Input() required: boolean = false;
  @Input() maxLength?: number;
  @Input() options: string[] = []; // for radio buttons
  @Input() disabled = false;

  value: any;
  isInvalid = false;

  onChange = (_: any) => { };
  onTouched = () => { };

  ngOnInit(): void { }

  setValue(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = this.type === 'check' ? input.checked : input.value;
    this.onChange(this.value);
    this.onTouched();
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.required && (this.value === null || this.value === undefined || this.value === '')) {
      this.isInvalid = true;
      return { required: true };
    }
    this.isInvalid = false;
    return null;
  }

  @HostListener('paste', ['$event'])
  blockPaste(event: ClipboardEvent) {
    if (this.type === 'text' || this.type === 'textarea') {
      event.preventDefault();
    }
  }
}
