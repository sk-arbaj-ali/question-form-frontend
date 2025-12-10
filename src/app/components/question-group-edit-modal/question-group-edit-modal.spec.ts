import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionGroupEditModal } from './question-group-edit-modal';

describe('QuestionGroupEditModal', () => {
  let component: QuestionGroupEditModal;
  let fixture: ComponentFixture<QuestionGroupEditModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionGroupEditModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionGroupEditModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
