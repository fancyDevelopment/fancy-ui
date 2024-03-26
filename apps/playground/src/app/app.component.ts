import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent, IconComponent } from 'fancy-ui-core';
import { AppBarBundle, AppHeaderBundle, ShellBundle, ViewBundle } from 'fancy-ui-shell';
import { CardBundle } from 'fancy-ui-content';

@Component({
    standalone: true,
    selector: 'org-root',
    templateUrl: './app.component.html',
    imports: [RouterModule, IconComponent, ButtonComponent, ShellBundle, AppHeaderBundle, AppBarBundle, ViewBundle, CardBundle]
})
export class AppComponent {
  title = 'playground';

  onButtonTap() {
    console.log('Button tapped!');
  }
}
