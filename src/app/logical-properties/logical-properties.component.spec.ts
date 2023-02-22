import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicalPropertiesComponent } from './logical-properties.component';

describe('LogicalPropertiesComponent', () => {
  let component: LogicalPropertiesComponent;
  let fixture: ComponentFixture<LogicalPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogicalPropertiesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LogicalPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
