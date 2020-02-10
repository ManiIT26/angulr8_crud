import { TestBed, async, inject } from '@angular/core/testing';

import { MuAuthGuard } from './mu-auth.guard';

describe('MuAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MuAuthGuard]
    });
  });

  it('should ...', inject([MuAuthGuard], (guard: MuAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
