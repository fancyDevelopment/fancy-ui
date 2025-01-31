import { NgTemplateOutlet } from '@angular/common';
import { Component, contentChild, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { ViewMainContentComponent } from './view-content.component';
import { ViewFooterComponent } from './view-footer.component';
import { ViewHeaderComponent } from './view-header.component';
import { delay } from 'rxjs';

@Component({
    selector: 'fui-view',
    imports: [NgTemplateOutlet],
    templateUrl: './view.component.html'
})
export class ViewComponent {
  showSpinner = input(false);
  showSpinnerDebounced = toSignal(toObservable(this.showSpinner).pipe(delay(800)));
  _viewHeaderComponent = contentChild(ViewHeaderComponent);
  _viewMainContentComponent = contentChild(ViewMainContentComponent);
  _viewFooterComponent = contentChild(ViewFooterComponent);
}
