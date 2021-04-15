import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryMgrComponent } from './library-mgr.component';

describe('LibraryMgrComponent', () => {
  let component: LibraryMgrComponent;
  let fixture: ComponentFixture<LibraryMgrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryMgrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryMgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
