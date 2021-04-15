import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderChapterListContainerComponent } from './reader-chapter-list-container.component';

describe('ReaderChapterListContainerComponent', () => {
  let component: ReaderChapterListContainerComponent;
  let fixture: ComponentFixture<ReaderChapterListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaderChapterListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderChapterListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
