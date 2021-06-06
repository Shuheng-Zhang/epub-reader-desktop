import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstConfigComponent } from './first-config.component';

describe('FirstConfigComponent', () => {
  let component: FirstConfigComponent;
  let fixture: ComponentFixture<FirstConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
