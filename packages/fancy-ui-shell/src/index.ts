import { ShellComponent } from "./lib/shell/shell.component";
import { AppBarActionComponent } from "./lib/app-bar/app-bar-action.component";
import { AppBarComponent } from "./lib/app-bar/app-bar.component";
import { NavRailItemComponent } from "./lib/nav-rail/nav-rail-item.component";
import { NavRailComponent } from "./lib/nav-rail/nav-rail.component";
import { NavBarComponent } from "./lib/nav-bar/nav-bar.component";
import { NavBarItemComponent } from "./lib/nav-bar/nav-bar-item.component";
import { ViewComponent } from "./lib/view/view.component";
import { ViewHeaderComponent } from "./lib/view/view-header.component";
import { ViewMainContentComponent } from "./lib/view/view-content.component";
import { ViewFooterComponent } from "./lib/view/view-footer.component";

export { ShellComponent }
export const ShellBundle = [ ShellComponent ];

export { AppBarComponent, AppBarActionComponent };
export const AppBarBundle = [ AppBarComponent, AppBarActionComponent];

export { NavRailComponent, NavRailItemComponent };
export const NavRailBundle = [ NavRailComponent, NavRailItemComponent ];

export { NavBarComponent, NavBarItemComponent }
export const NavBarBundle = [ NavBarComponent, NavBarItemComponent ];

export { ViewComponent, ViewHeaderComponent, ViewMainContentComponent, ViewFooterComponent }
export const ViewBundle = [ ViewComponent, ViewHeaderComponent, ViewMainContentComponent, ViewFooterComponent ]
