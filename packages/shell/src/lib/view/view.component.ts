import { NgTemplateOutlet } from '@angular/common';
import { Component, contentChild } from '@angular/core';
import { ViewMainContentComponent } from './view-content.component';
import { ViewFooterComponent } from './view-footer.component';
import { ViewHeaderComponent } from './view-header.component';

@Component({
  selector: 'fui-view',
  standalone: true,
  imports: [ NgTemplateOutlet ],
  templateUrl: './view.component.html',
})
export class ViewComponent {
  _viewHeaderComponent = contentChild(ViewHeaderComponent);
  _viewMainContentComponent = contentChild(ViewMainContentComponent);
  _viewFooterComponent = contentChild(ViewFooterComponent);
}
