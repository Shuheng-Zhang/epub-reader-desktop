import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommsDividerComponent } from './comms-divider.component';

describe('CommsDividerComponent', () => {
  let component: CommsDividerComponent;
  let fixture: ComponentFixture<CommsDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommsDividerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommsDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
