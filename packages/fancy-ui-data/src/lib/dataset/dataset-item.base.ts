import { Directive, TemplateRef, input } from '@angular/core';

export type DatasetTarget = 'Table' | 'Card' | 'TableAndCard';

export type DatasetResponsive =
      'Always'
    | 'SmAndUp'
    | 'MdAndUp'
    | 'LgAndUp'
    | 'XlAndUp'
    | 'SmOnly'
    | 'MdOnly'
    | 'LgOnly'
    | 'XlOnly';

export type DatasetWidth = 'Xl' | 'Lg' | 'Md' | 'Sm';

@Directive()
export abstract class DatasetItemBase {

    label = input('');

    target = input<DatasetTarget>('TableAndCard');

    sortKey = input('');

    tableVisibleAt = input<DatasetResponsive>('Always');

    itemCardWidth = input<DatasetWidth>('Md');

    itemTableWidth = input<DatasetWidth>('Md');

    abstract get cardTemplate(): TemplateRef<unknown> | undefined;

    abstract get tableTemplate(): TemplateRef<unknown> | undefined;
}
