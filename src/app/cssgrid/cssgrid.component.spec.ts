import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSGridComponent } from './cssgrid.component';

describe('CSSGridComponent', () => {
  let component: CSSGridComponent;
  let fixture: ComponentFixture<CSSGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CSSGridComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CSSGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
