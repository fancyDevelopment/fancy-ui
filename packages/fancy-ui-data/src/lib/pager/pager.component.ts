import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'fui-pager',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pager.component.html'
})
export class PagerComponent {
  prevPageRouterLink = input<any[] | string | null>(null);
  nextPageRouterLink = input<any[] | string | null>(null);
  currentPage = input(0);
  pageCount = input(0);
}
