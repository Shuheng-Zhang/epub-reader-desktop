import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OptionLocationComponent} from './option-location.component';

describe('OptionLocationComponent', () => {
  let component: OptionLocationComponent;
  let fixture: ComponentFixture<OptionLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OptionLocationComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
