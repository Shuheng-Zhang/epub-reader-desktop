import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EbookListItemComponent} from './ebook-list-item.component';

describe('EbookListItemComponent', () => {
  let component: EbookListItemComponent;
  let fixture: ComponentFixture<EbookListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EbookListItemComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EbookListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
