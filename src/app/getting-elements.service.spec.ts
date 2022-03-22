import { TestBed } from '@angular/core/testing';

import { GettingElementsService } from './getting-elements.service';

describe('GettingElementsService', () => {
  let service: GettingElementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GettingElementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
