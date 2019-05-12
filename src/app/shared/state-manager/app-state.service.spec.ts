import { TestBed } from '@angular/core/testing';

import { AppState } from './app-state.service';

describe('AppStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppState = TestBed.get(AppState);
    expect(service).toBeTruthy();
  });
});
