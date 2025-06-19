import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputControlComponent } from '../../../../dist/custom-angular-controls';
import { FormBuilder,  FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormBuilder, FormGroup, Validators,
    CustomInputControlComponent // ✅ Import standalone component here
  ]
})
export class AppModule {}
