import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuiIconComponent } from 'fancy-ui-core';

@Component({
  standalone: true,
  imports: [RouterModule, FuiIconComponent],
  selector: 'org-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'playground';
}
