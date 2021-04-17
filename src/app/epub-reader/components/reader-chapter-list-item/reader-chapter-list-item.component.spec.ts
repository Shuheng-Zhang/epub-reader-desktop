import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ReaderChapterListItemComponent} from './reader-chapter-list-item.component';

describe('ReaderChapterListItemComponent', () => {
  let component: ReaderChapterListItemComponent;
  let fixture: ComponentFixture<ReaderChapterListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReaderChapterListItemComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderChapterListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
