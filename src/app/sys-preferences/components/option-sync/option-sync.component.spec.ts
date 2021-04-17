import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OptionSyncComponent} from './option-sync.component';

describe('OptionSyncComponent', () => {
  let component: OptionSyncComponent;
  let fixture: ComponentFixture<OptionSyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OptionSyncComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionSyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
