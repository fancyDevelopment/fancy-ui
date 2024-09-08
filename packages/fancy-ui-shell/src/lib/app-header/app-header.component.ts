import { Component, contentChildren, signal, input, Output, EventEmitter } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { fromEvent, skip, Subscription } from 'rxjs';
import { AppHeaderActionComponent } from './app-header-action.component';
import { IconComponent } from 'fancy-ui-core';

@Component({
  selector: 'fui-app-header',
  standalone: true,
  imports: [NgTemplateOutlet, IconComponent],
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {
  /**
   * Icon name the AppHeader.
   */
  iconName = input<string|null>(null)

  /**
   * Title within the AppHeader.
   */
  title = input('App Title');

  /**
   * Username within the AppHeader.
   */
  userDisplayName = input<string|null>(null);

  /**
   * User Id within the AppHeader.
   */
  userId = input<string|null>(null);

  @Output()
  titleTap = new EventEmitter<void>();

  // The view header actions
  _appHeaderActions = contentChildren(AppHeaderActionComponent)

  // State to save if actions dropdown is open
  public _actionsDropdownIsOpen = signal(false);
  private _documentClickSubscription: Subscription | null = null;

  _openActionsDropdown(): void {
    this._actionsDropdownIsOpen.set(true);
    if(!this._documentClickSubscription) {
      this._documentClickSubscription = fromEvent(document, 'click').pipe(skip(1)).subscribe(() => this._closeActionsDropdown() );
    }
  }

  _closeActionsDropdown(): void {
    this._actionsDropdownIsOpen.set(false);
    this._documentClickSubscription?.unsubscribe();
    this._documentClickSubscription = null;
  }
}
