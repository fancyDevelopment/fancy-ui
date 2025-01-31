import { Component, contentChildren, inject, input } from '@angular/core';
import { Location, NgTemplateOutlet, SlicePipe } from '@angular/common';
import { fromEvent, skip, Subscription } from 'rxjs';
import { AppBarActionComponent } from './app-bar-action.component';
import { IconComponent } from 'fancy-ui-core';

@Component({
    selector: 'fui-app-bar',
    imports: [NgTemplateOutlet, IconComponent, SlicePipe],
    templateUrl: './app-bar.component.html'
})
export class AppBarComponent {
  /**
   * Title within the AppBar.
   */
  title = input('View Title');

  /**
   * Flag to indicate weather the back button shall be shown.
   */
  showBackButton = input(false);

  // The app bar actions
  _appBarActions = contentChildren(AppBarActionComponent)

  private _location = inject(Location);

  // State to save if actions dropdown is open
  public _viewActionsDropdownIsOpen = false;
  private _documentClickSubscription: Subscription | null = null;

  _openActionsDropdown(): void {
    this._viewActionsDropdownIsOpen = true;
    if(!this._documentClickSubscription) {
      this._documentClickSubscription = fromEvent(document, 'click').pipe(skip(1)).subscribe(() => this._closeActionsDropdown() );
    }
  }

  _closeActionsDropdown(): void {
    this._viewActionsDropdownIsOpen = false;
    this._documentClickSubscription?.unsubscribe();
    this._documentClickSubscription = null;
  }

  _navigateBack(): void {
    this._location.back();
  }
}
