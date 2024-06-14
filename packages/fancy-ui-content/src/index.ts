import { MetricComponent } from './lib/metric/metric.component';
import { SwipeableTabsBladeComponent } from './lib/swipeable-tabs/swipeable-tabs-blade.component';
import { SwipeableTabsComponent } from './lib/swipeable-tabs/swipeable-tabs.component';
import { SwiperBladeComponent } from './lib/swiper/swiper-blade.component';
import { SwiperComponent } from './lib/swiper/swiper.component';
import { TabsItemComponent } from './lib/tabs/tabs-item.component';
import { TabsComponent } from './lib/tabs/tabs.component';
import { CardActionsComponent } from "./lib/card/card-actions.component";
import { CardContentComponent } from "./lib/card/card-content.component";
import { CardHeaderComponent } from "./lib/card/card-header.component";
import { CardImageComponent } from "./lib/card/card-image.component";
import { CardGrowComponent } from "./lib/card/card-grow.component";
import { CardComponent } from "./lib/card/card.component";

export { 
    CardComponent, 
    CardHeaderComponent, 
    CardImageComponent, 
    CardContentComponent, 
    CardGrowComponent, 
    CardActionsComponent, 
    TabsComponent, 
    TabsItemComponent, 
    SwiperComponent, 
    SwiperBladeComponent, 
    SwipeableTabsComponent, 
    SwipeableTabsBladeComponent, 
    MetricComponent 
};

export const TabsBundle = [ TabsComponent, TabsItemComponent ];

export const SwiperBundle = [ SwiperComponent, SwiperBladeComponent ];

export const CardBundle = [CardComponent, CardHeaderComponent, CardImageComponent, CardContentComponent, CardGrowComponent, CardActionsComponent];
