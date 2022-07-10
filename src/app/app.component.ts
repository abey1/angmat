import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetOverviewExampleComponent } from './bottom-sheet-overview-example/bottom-sheet-overview-example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'angmat';
  hidden = false;
  button_text = '';
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  badge_number: number = 0;

  constructor(private _bottomSheet: MatBottomSheet) {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  handleButtonClick() {
    this.badge_number = this.badge_number + 1;
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleComponent);
  }

  handleButtonClick2(text: string) {
    this.button_text = text + ' is clicked';
    console.log(text);
  }
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
