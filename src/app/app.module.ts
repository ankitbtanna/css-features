import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CSSGridComponent } from './cssgrid/cssgrid.component';
import { IsWhereHasComponent } from './is-where-has/is-where-has.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'is-where-has', component: IsWhereHasComponent },
  { path: 'css-grid', component: CSSGridComponent },
];
@NgModule({
  declarations: [AppComponent, IsWhereHasComponent, CSSGridComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
