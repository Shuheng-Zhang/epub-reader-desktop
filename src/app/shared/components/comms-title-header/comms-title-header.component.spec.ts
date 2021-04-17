import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CommsTitleHeaderComponent} from './comms-title-header.component';

describe('CommsTitleHeaderComponent', () => {
  let component: CommsTitleHeaderComponent;
  let fixture: ComponentFixture<CommsTitleHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommsTitleHeaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommsTitleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
