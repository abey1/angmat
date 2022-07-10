import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-button-overview-example',
  templateUrl: './button-overview-example.component.html',
  styleUrls: ['./button-overview-example.component.css'],
})
export class ButtonOverviewExampleComponent implements OnInit {
  @Output() buttonPushEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
  handleButtonClick(value: string) {
    this.buttonPushEvent.emit(value);
  }
}
