import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CSSFlexComponent } from './css-flex/css-flex.component';
import { CSSGridComponent } from './css-grid/css-grid.component';
import { CSSLayoutsComponent } from './css-layouts/css-layouts.component';
import { CenterLayoutComponent } from './css-layouts/center-layout/center-layout.component';
import { DeconstructedPancakeComponent } from './css-layouts/deconstructed-pancake/deconstructed-pancake.component';
import { IsWhereHasComponent } from './is-where-has/is-where-has.component';
import { LogicalPropertiesComponent } from './logical-properties/logical-properties.component';
import { NgModule } from '@angular/core';
import { PancakeStackComponent } from './css-layouts/pancake-stack/pancake-stack.component';
import { SemanticCssComponent } from './semantic-css/semantic-css.component';
import { SidebarSaysComponent } from './css-layouts/sidebar-says/sidebar-says.component';

const routes: Routes = [
  { path: 'is-where-has', component: IsWhereHasComponent },
  { path: 'css-grid', component: CSSGridComponent },
  { path: 'css-flex', component: CSSFlexComponent },
  { path: 'css-layouts', component: CSSLayoutsComponent },
  { path: 'semantic-css', component: SemanticCssComponent },
  { path: 'logical-properties', component: LogicalPropertiesComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    IsWhereHasComponent,
    CSSGridComponent,
    CSSFlexComponent,
    CSSLayoutsComponent,
    CenterLayoutComponent,
    DeconstructedPancakeComponent,
    SidebarSaysComponent,
    PancakeStackComponent,
    SemanticCssComponent,
    LogicalPropertiesComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
