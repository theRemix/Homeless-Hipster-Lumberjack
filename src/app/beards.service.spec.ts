/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { BeardsService } from './beards.service';

describe('Service: Beards', () => {
  beforeEach(() => {
    addProviders([BeardsService]);
  });

  it('should ...',
    inject([BeardsService],
      (service: BeardsService) => {
        expect(service).toBeTruthy();
      }));
});
