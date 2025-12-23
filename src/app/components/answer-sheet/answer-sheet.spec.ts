import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerSheet } from './answer-sheet';

describe('AnswerSheet', () => {
  let component: AnswerSheet;
  let fixture: ComponentFixture<AnswerSheet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswerSheet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerSheet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
