import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialExampleModule } from '../material.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { BottomSheetOverviewExampleComponent } from './bottom-sheet-overview-example/bottom-sheet-overview-example.component';
import { ButtonOverviewExampleComponent } from './button-overview-example/button-overview-example.component';
import { SingleToggleButtonsExampleComponent } from './single-toggle-buttons-example/single-toggle-buttons-example.component';
import { MultipleToggleButtonsExampleComponent } from './multiple-toggle-buttons-example/multiple-toggle-buttons-example.component';
@NgModule({
  declarations: [AppComponent, BottomSheetOverviewExampleComponent, ButtonOverviewExampleComponent, SingleToggleButtonsExampleComponent, MultipleToggleButtonsExampleComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
