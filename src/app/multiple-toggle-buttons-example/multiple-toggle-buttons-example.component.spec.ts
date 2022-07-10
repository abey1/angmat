import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleToggleButtonsExampleComponent } from './multiple-toggle-buttons-example.component';

describe('MultipleToggleButtonsExampleComponent', () => {
  let component: MultipleToggleButtonsExampleComponent;
  let fixture: ComponentFixture<MultipleToggleButtonsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleToggleButtonsExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleToggleButtonsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
