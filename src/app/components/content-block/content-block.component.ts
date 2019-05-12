import { Component, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';

@Component({
  selector: 'raa-content-block',
  templateUrl: './content-block.component.html',
})
export class ContentBlockComponent {
  @Input() rendering: ComponentRendering;
}
