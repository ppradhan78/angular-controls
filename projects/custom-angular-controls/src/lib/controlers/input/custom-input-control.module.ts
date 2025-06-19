import { NgModule } from '@angular/core';
import { CustomInputControlComponent } from './custom-input-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
@NgModule({
  declarations: [CustomInputControlComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CustomInputControlComponent]
})
export class CustomInputModule { }
