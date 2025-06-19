import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAngularControlsComponent } from './custom-angular-controls.component';

describe('CustomAngularControlsComponent', () => {
  let component: CustomAngularControlsComponent;
  let fixture: ComponentFixture<CustomAngularControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomAngularControlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomAngularControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
