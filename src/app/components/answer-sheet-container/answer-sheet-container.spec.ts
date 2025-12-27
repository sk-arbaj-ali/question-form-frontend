import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerSheetContainer } from './answer-sheet-container';

describe('AnswerSheetContainer', () => {
  let component: AnswerSheetContainer;
  let fixture: ComponentFixture<AnswerSheetContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswerSheetContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerSheetContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
