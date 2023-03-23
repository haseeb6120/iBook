import { TestBed } from '@angular/core/testing';

import { IBookService } from './i-book.service';

describe('IBookService', () => {
  let service: IBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
