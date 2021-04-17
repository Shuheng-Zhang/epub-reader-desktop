import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EbookInfoCardComponent} from './ebook-info-card.component';

describe('EbookInfoCardComponent', () => {
  let component: EbookInfoCardComponent;
  let fixture: ComponentFixture<EbookInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EbookInfoCardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EbookInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
