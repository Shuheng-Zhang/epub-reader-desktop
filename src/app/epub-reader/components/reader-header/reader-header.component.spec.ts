import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ReaderHeaderComponent} from './reader-header.component';

describe('ReaderHeaderComponent', () => {
  let component: ReaderHeaderComponent;
  let fixture: ComponentFixture<ReaderHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReaderHeaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
