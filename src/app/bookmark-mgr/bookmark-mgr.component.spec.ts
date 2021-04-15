import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkMgrComponent } from './bookmark-mgr.component';

describe('BookmarkMgrComponent', () => {
  let component: BookmarkMgrComponent;
  let fixture: ComponentFixture<BookmarkMgrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkMgrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkMgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
