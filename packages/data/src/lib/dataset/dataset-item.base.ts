import { TemplateRef, input } from '@angular/core';

export type DatasetTarget = 'Table' | 'Card' | 'TableAndCard';

export type DatasetResponsive =
      'SmAndUp'
    | 'MdAndUp'
    | 'LgAndUp'
    | 'XlAndUp'
    | 'SmOnly'
    | 'MdOnly'
    | 'LgOnly'
    | 'XlOnly';

export type DatasetCardLineWidth = 'Full' | 'Half' | 'Quarter';

export abstract class DatasetItemBase {

    label = input('');

    target = input<DatasetTarget>('TableAndCard');

    responsive = input<DatasetResponsive>('SmAndUp');

    cardLineWidth = input<DatasetCardLineWidth>('Half');

    abstract get cardTemplate(): TemplateRef<unknown> | undefined;

    abstract get tableTemplate(): TemplateRef<unknown> | undefined;
}
