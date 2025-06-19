import { TestBed } from '@angular/core/testing';

import { CustomAngularControlsService } from './custom-angular-controls.service';

describe('CustomAngularControlsService', () => {
  let service: CustomAngularControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomAngularControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
