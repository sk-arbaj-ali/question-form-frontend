import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerTrueFalse } from './answer-true-false';

describe('AnswerTrueFalse', () => {
  let component: AnswerTrueFalse;
  let fixture: ComponentFixture<AnswerTrueFalse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswerTrueFalse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerTrueFalse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
