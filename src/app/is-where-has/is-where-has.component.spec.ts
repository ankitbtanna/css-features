import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsWhereHasComponent } from './is-where-has.component';

describe('IsWhereHasComponent', () => {
  let component: IsWhereHasComponent;
  let fixture: ComponentFixture<IsWhereHasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IsWhereHasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IsWhereHasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
