import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import {SearchPipe} from '../pipes/search.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import {AppRouting} from './app.routes';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { SearchComponent } from './search/search.component';
import {SearchByNamePipe} from '../pipes/search-by-name.pipe';
import {ResultTableComponent} from './result-table/result-table.component';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SearchPipe,
    SearchByNamePipe,
    NotFoundComponent,
    MenuComponent,
    SearchComponent,
    ResultTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRouting,
    BrowserAnimationsModule,
    MatIconModule,
    FlexLayoutModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,

  ],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
