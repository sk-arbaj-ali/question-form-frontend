import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerCheckboxes } from './answer-checkboxes';

describe('AnswerCheckboxes', () => {
  let component: AnswerCheckboxes;
  let fixture: ComponentFixture<AnswerCheckboxes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswerCheckboxes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerCheckboxes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
