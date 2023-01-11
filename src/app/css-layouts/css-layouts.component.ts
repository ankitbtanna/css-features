import { Component } from '@angular/core';

@Component({
  selector: 'css-features-css-layouts',
  templateUrl: './css-layouts.component.html',
  styleUrls: ['./css-layouts.component.scss'],
})
export class CSSLayoutsComponent {
  activeLayout = 'center-layout';

  layouts = ['center-layout', 'split-layout'];

  setActiveLayout(layout: string) {
    this.activeLayout = layout;
  }
}