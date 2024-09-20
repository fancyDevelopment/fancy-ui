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

export type DatasetCardLineWidth = 'Full' | 'Half' | 'Quarter';

@Directive()
export abstract class DatasetItemBase {

    label = input('');

    target = input<DatasetTarget>('TableAndCard');

    sortKey = input('');

    tableVisibleAt = input<DatasetResponsive>('Always');

    cardLineWidth = input<DatasetCardLineWidth>('Half');

    abstract get cardTemplate(): TemplateRef<unknown> | undefined;

    abstract get tableTemplate(): TemplateRef<unknown> | undefined;
}
