import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideAvatarComponent } from './side-avatar.component';

describe('SideAvatarComponent', () => {
  let component: SideAvatarComponent;
  let fixture: ComponentFixture<SideAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
