import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitigiosComponent } from './litigios.component';

describe('LitigiosComponent', () => {
  let component: LitigiosComponent;
  let fixture: ComponentFixture<LitigiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LitigiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LitigiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
