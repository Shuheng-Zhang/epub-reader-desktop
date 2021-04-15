import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionThemeComponent } from './option-theme.component';

describe('OptionThemeComponent', () => {
  let component: OptionThemeComponent;
  let fixture: ComponentFixture<OptionThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
