import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysPreferencesComponent } from './sys-preferences.component';

describe('SysPreferencesComponent', () => {
  let component: SysPreferencesComponent;
  let fixture: ComponentFixture<SysPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysPreferencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SysPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
