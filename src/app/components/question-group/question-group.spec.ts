import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionGroup } from './question-group';

describe('QuestionGroup', () => {
  let component: QuestionGroup;
  let fixture: ComponentFixture<QuestionGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
