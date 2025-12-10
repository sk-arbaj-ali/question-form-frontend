import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionGroupAddModal } from './question-group-add-modal';

describe('QuestionGroupAddModal', () => {
  let component: QuestionGroupAddModal;
  let fixture: ComponentFixture<QuestionGroupAddModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionGroupAddModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionGroupAddModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
