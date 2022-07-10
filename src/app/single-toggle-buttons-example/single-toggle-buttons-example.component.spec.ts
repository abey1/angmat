import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleToggleButtonsExampleComponent } from './single-toggle-buttons-example.component';

describe('SingleToggleButtonsExampleComponent', () => {
  let component: SingleToggleButtonsExampleComponent;
  let fixture: ComponentFixture<SingleToggleButtonsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleToggleButtonsExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleToggleButtonsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
