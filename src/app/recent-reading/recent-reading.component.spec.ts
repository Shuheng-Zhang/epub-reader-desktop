import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RecentReadingComponent} from './recent-reading.component';

describe('RecentReadingComponent', () => {
  let component: RecentReadingComponent;
  let fixture: ComponentFixture<RecentReadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecentReadingComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
