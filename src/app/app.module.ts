import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CSSFlexComponent } from './css-flex/css-flex.component';
import { CSSGridComponent } from './css-grid/css-grid.component';
import { IsWhereHasComponent } from './is-where-has/is-where-has.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'is-where-has', component: IsWhereHasComponent },
  { path: 'css-grid', component: CSSGridComponent },
  { path: 'css-flex', component: CSSFlexComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    IsWhereHasComponent,
    CSSGridComponent,
    CSSFlexComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
