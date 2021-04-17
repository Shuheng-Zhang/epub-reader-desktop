import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BookmarkListContainerComponent} from './bookmark-list-container.component';

describe('BookmarkListContainerComponent', () => {
  let component: BookmarkListContainerComponent;
  let fixture: ComponentFixture<BookmarkListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookmarkListContainerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
