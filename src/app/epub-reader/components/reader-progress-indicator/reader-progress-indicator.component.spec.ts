import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ReaderProgressIndicatorComponent} from './reader-progress-indicator.component';

describe('ReaderProgressIndicatorComponent', () => {
  let component: ReaderProgressIndicatorComponent;
  let fixture: ComponentFixture<ReaderProgressIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReaderProgressIndicatorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderProgressIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
