import { Provider } from "@angular/core";
import { provideIcons, provideNgIconsConfig } from '@ng-icons/core';
import { heroArrowLeft } from '@ng-icons/heroicons/outline';
import { matMoreVertOutline } from '@ng-icons/material-icons/outline';

export function provideFancyUi(): Provider[] {
    return [
        provideIcons({heroArrowLeft, matMoreVertOutline}),
        provideNgIconsConfig({
            size: '100%',
          }),
    ];
}
