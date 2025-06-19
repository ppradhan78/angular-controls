import { TestBed } from '@angular/core/testing';
import { CustomInputControlService } from './custom-input-control.service';


describe('CustomInputControlService', () => {
  let service: CustomInputControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomInputControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
