import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-single-toggle-buttons-example',
  templateUrl: './single-toggle-buttons-example.component.html',
  styleUrls: ['./single-toggle-buttons-example.component.css'],
})
export class SingleToggleButtonsExampleComponent implements OnInit {
  @Output() buttonPushEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  handleButtonClick(value: string) {
    this.buttonPushEvent.emit(value);
  }
}
