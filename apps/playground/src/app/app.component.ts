import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconComponent } from 'fancy-ui-core';
import { AppBarActionComponent, AppBarComponent } from 'fancy-ui-shell';

@Component({
  standalone: true,
  imports: [RouterModule, IconComponent, AppBarComponent, AppBarActionComponent],
  selector: 'org-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'playground';
}
