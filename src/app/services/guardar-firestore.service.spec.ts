import { TestBed } from '@angular/core/testing';

import { GuardarFirestoreService } from './guardar-firestore.service';

describe('GuardarFirestoreService', () => {
  let service: GuardarFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardarFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
