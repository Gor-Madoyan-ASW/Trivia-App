import { TestBed } from '@angular/core/testing';

import { QuestionnaireService } from './questionnaire.service';

describe('QuestionnaireServiceService', () => {
  let service: QuestionnaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionnaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
