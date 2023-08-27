import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileImgEditComponent } from './profile-img-edit.component';

describe('ProfileImgEditComponent', () => {
  let component: ProfileImgEditComponent;
  let fixture: ComponentFixture<ProfileImgEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileImgEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileImgEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
