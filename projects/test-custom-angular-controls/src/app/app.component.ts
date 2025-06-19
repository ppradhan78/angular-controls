import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomInputControlComponent } from '../../../../dist/custom-angular-controls';
@Component({
  selector: 'app-root',
  //imports: [RouterOutlet, FormBuilder, FormGroup, Validators, CustomInputControlComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  //standalone: true,
  schemas: [NO_ERRORS_SCHEMA],
  
})
export class AppComponent {
  title = 'test-custom-angular-controls';

 
  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      birthDate: [''],
      gender: []
    });
    console.log(this.form);
  }
}
