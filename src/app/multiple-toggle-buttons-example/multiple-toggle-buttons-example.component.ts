import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-multiple-toggle-buttons-example',
  templateUrl: './multiple-toggle-buttons-example.component.html',
  styleUrls: ['./multiple-toggle-buttons-example.component.css'],
})
export class MultipleToggleButtonsExampleComponent implements OnInit {
  @Output() buttonEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  handleButtonClick(value: number) {
    this.buttonEvent.emit(value);
  }
}
