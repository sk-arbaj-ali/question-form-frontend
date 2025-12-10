import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsqComponent } from './msq-component';

describe('MsqComponent', () => {
  let component: MsqComponent;
  let fixture: ComponentFixture<MsqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MsqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
