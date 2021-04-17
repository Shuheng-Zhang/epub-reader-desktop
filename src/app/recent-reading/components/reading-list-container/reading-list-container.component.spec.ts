import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ReadingListContainerComponent} from './reading-list-container.component';

describe('ReadingListContainerComponent', () => {
  let component: ReadingListContainerComponent;
  let fixture: ComponentFixture<ReadingListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadingListContainerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
