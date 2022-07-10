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
  chosen = 'your choice here';
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  badge_number: number = 0;
  text_styles: string[] = ['bold', 'italic', 'underline'];
  ingredients = '';
  chosen_ingredients: string[] = [];
  ingredients_list: string[] = ['', 'flour', 'eggs', 'sugar'];
  chosen_indicator: boolean[] = [false, false, false, false];

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

  handleButtonClick3(text: string) {
    this.chosen = text;
    const element = document.getElementById('your_text');
    this.text_styles.forEach((style) => {
      element?.classList.remove(style);
    });
    element?.classList.add(text);
  }

  handleButtonClick4(index: number) {
    this.chosen_indicator[index] = !this.chosen_indicator[index];
    this.chosen_ingredients = [];
    this.ingredients_list.forEach((i, index) => {
      this.chosen_indicator[index] ? this.chosen_ingredients.push(i) : null;
    });
    this.ingredients = this.chosen_ingredients.join(', ');
  }
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
