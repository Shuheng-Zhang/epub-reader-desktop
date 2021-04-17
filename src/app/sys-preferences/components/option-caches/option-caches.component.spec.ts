import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OptionCachesComponent} from './option-caches.component';

describe('OptionCachesComponent', () => {
  let component: OptionCachesComponent;
  let fixture: ComponentFixture<OptionCachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OptionCachesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionCachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
