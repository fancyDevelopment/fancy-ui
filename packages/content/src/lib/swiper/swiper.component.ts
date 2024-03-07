import { AfterViewInit, Component, ElementRef, Signal, computed, contentChildren, model, signal, viewChild } from '@angular/core';
import { SwiperBladeComponent } from './swiper-blade.component';

@Component({
  selector: 'fui-swiper',
  standalone: true,
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements AfterViewInit {
  
  activatedBladeIndex = model(0);

  _childCount = computed(() => this._container()?.nativeElement.children?.length);
  _height: Signal<number> | null = null;
  _enableAnimations = signal(false);
  _container = viewChild<ElementRef>('container');
  _blades = contentChildren(SwiperBladeComponent, { read: ElementRef });
  
  private x0: any = null;

  ngAfterViewInit(): void {
    this._height = computed(() => this._blades()[this.activatedBladeIndex()].nativeElement.offsetHeight);
    // Enable animations for next rendering
    setTimeout(() => this._enableAnimations.set(true), 0);
  }

  lock(e: any) { 
    this.x0 = this.unify(e).clientX;
  }

  move(e: any) {
	  if(this.x0 || this.x0 === 0) {
		  const dx = this.unify(e).clientX - this.x0;
      const s = Math.sign(dx);

      const i = this.activatedBladeIndex();
		  if((i > 0 || s < 0) && (i < this._childCount() - 1 || s > 0)) {
        this.activatedBladeIndex.set(i - s);
      }
		  this.x0 = null;
	}
}

onTouchmove(e: any) {
  e.preventDefault();
}

  private unify(e: any) {
    return e.changedTouches ? e.changedTouches[0] : e 
  }

}
