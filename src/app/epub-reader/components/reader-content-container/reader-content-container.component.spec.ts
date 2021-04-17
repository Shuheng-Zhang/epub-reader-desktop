import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ReaderContentContainerComponent} from './reader-content-container.component';

describe('ReaderContentContainerComponent', () => {
  let component: ReaderContentContainerComponent;
  let fixture: ComponentFixture<ReaderContentContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReaderContentContainerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderContentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
