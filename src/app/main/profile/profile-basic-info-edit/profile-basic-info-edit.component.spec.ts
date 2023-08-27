import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBasicInfoEditComponent } from './profile-basic-info-edit.component';

describe('ProfileBasicInfoEditComponent', () => {
  let component: ProfileBasicInfoEditComponent;
  let fixture: ComponentFixture<ProfileBasicInfoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileBasicInfoEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileBasicInfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
