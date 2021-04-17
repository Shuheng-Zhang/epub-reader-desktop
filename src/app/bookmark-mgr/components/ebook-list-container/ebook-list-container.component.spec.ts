import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EbookListContainerComponent} from './ebook-list-container.component';

describe('EbookListContainerComponent', () => {
  let component: EbookListContainerComponent;
  let fixture: ComponentFixture<EbookListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EbookListContainerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EbookListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
