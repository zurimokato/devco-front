import { TestBed } from '@angular/core/testing';

import { RoleCandidateGuard } from './role-candidate.guard';

describe('RoleCandidateGuard', () => {
  let guard: RoleCandidateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoleCandidateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
