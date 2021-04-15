import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderBookmarkListItemComponent } from './reader-bookmark-list-item.component';

describe('ReaderBookmarkListItemComponent', () => {
  let component: ReaderBookmarkListItemComponent;
  let fixture: ComponentFixture<ReaderBookmarkListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaderBookmarkListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderBookmarkListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
