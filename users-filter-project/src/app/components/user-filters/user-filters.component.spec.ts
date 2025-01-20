import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFiltersComponent } from './user-filters.component';

describe('UserFiltersComponent', () => {
  let component: UserFiltersComponent;
  let fixture: ComponentFixture<UserFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
