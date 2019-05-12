import { Component, Input } from '@angular/core';
import { LayoutServiceContextData } from '@sitecore-jss/sitecore-jss';

@Component({
  selector: 'raa-not-found',
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {
  @Input() errorContextData: LayoutServiceContextData;
}
