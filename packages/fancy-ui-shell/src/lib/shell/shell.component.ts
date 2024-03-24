import { Component, TemplateRef, contentChild } from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'fui-shell',
  standalone: true,
  imports: [NgTemplateOutlet, NgClass],
  templateUrl: './shell.component.html'
})
export class ShellComponent {
  _topTemplate = contentChild<TemplateRef<unknown>>('topTemplate');
  _leftTemplate = contentChild<TemplateRef<unknown>>('leftTemplate');
  _mainContentTemplate = contentChild<TemplateRef<unknown>>('mainContentTemplate');
  _bottomTemplate = contentChild<TemplateRef<unknown>>('bottomTemplate');
}
