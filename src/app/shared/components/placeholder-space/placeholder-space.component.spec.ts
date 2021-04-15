import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderSpaceComponent } from './placeholder-space.component';

describe('PlaceholderSpaceComponent', () => {
  let component: PlaceholderSpaceComponent;
  let fixture: ComponentFixture<PlaceholderSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceholderSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
