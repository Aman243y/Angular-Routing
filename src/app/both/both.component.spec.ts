import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BothComponent } from './both.component';

describe('BothComponent', () => {
  let component: BothComponent;
  let fixture: ComponentFixture<BothComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BothComponent]
    });
    fixture = TestBed.createComponent(BothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
