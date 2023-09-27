import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { monGuard2Guard } from './mon-guard2.guard';

describe('monGuard2Guard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => monGuard2Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
