import { Component, ContentChildren, Input, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { fromEvent, skip, Subscription } from 'rxjs';
import { AppBarActionComponent } from './app-bar-action.component';
import { FuiIconComponent } from 'fancy-ui-core';

@Component({
  selector: 'fui-app-bar',
  standalone: true,
  imports: [CommonModule, FuiIconComponent],
  templateUrl: './app-bar.component.html'
})
export class AppBarComponent {
  /**
   * Title within the AppBar.
   */
  @Input() title = 'View Title';

  /**
   * Flag to indicate weather the back button shall be shown.
   */
  @Input() showBackButton = true;

  @ViewChild('template', {static: true})
  _template!: TemplateRef<unknown>;

  // The view header actions
  @ContentChildren(AppBarActionComponent) 
  _viewHeaderActions!: QueryList<AppBarActionComponent>;

  // State to save if actions dropdown is open
  public _viewActionsDropdownIsOpen = false;
  private _documentClickSubscription: Subscription | null = null;

  constructor(private _location: Location) {}

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
