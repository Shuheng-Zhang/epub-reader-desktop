import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EbookInfoGridContainerComponent} from './ebook-info-grid-container.component';

describe('EbookInfoGridContainerComponent', () => {
  let component: EbookInfoGridContainerComponent;
  let fixture: ComponentFixture<EbookInfoGridContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EbookInfoGridContainerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EbookInfoGridContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
