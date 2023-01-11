import { Component } from '@angular/core';

@Component({
  selector: 'css-features-css-layouts',
  templateUrl: './css-layouts.component.html',
  styleUrls: ['./css-layouts.component.scss'],
})
export class CSSLayoutsComponent {
  activeLayout = 'pancake-stack';

  layouts = [
    'center-layout',
    'deconstructed-pancake',
    'sidebar-says',
    'pancake-stack',
  ];

  setActiveLayout(layout: string) {
    this.activeLayout = layout;
  }
}
