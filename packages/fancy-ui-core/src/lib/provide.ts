import { Provider } from "@angular/core";
import { provideIcons, provideNgIconsConfig } from '@ng-icons/core';
import { heroArrowLeft, heroUser } from '@ng-icons/heroicons/outline';
import { matMoreVertOutline } from '@ng-icons/material-icons/outline';

export function provideFancyUi(): Provider[] {
    return [
        provideIcons({heroArrowLeft, heroUser, matMoreVertOutline}),
        provideNgIconsConfig({
            size: '100%',
          }),
    ];
}
