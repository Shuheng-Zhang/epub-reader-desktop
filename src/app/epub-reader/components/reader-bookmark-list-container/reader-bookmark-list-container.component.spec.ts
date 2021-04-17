import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ReaderBookmarkListContainerComponent} from './reader-bookmark-list-container.component';

describe('ReaderBookmarkListContainerComponent', () => {
  let component: ReaderBookmarkListContainerComponent;
  let fixture: ComponentFixture<ReaderBookmarkListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReaderBookmarkListContainerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderBookmarkListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
