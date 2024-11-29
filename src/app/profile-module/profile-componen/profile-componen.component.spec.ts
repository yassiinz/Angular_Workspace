import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponenComponent } from './profile-componen.component';

describe('ProfileComponenComponent', () => {
  let component: ProfileComponenComponent;
  let fixture: ComponentFixture<ProfileComponenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponenComponent]
    });
    fixture = TestBed.createComponent(ProfileComponenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
