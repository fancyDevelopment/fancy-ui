import { AfterViewInit, Component, ElementRef, computed, contentChildren, model, signal, viewChild } from '@angular/core';
import { SwiperBladeComponent } from './swiper-blade.component';

@Component({
  selector: 'fui-swiper',
  standalone: true,
  templateUrl: './swiper.component.html'
})
export class SwiperComponent implements AfterViewInit {
  
  activatedBladeIndex = model(0);

  _container = viewChild<ElementRef>('container');
  _blades = contentChildren(SwiperBladeComponent, { read: ElementRef });

  _childCount = computed(() => this._container()?.nativeElement.children?.length);
  _isInitialized = signal(false);
  _enableAnimation = signal(false);
  _height = computed(() => this.isInitialized() ? this._blades()[this.activatedBladeIndex()].nativeElement.offsetHeight : 0);
  
  isInitialized = this._isInitialized.asReadonly();
  
  private x0: any = null;

  ngAfterViewInit(): void {
    // Set initialized after next rendering and enable animation also later
    setTimeout(() => {
      this._isInitialized.set(true)
      setTimeout(() => {
        this._enableAnimation.set(true)
      }, 50);
    }, 0);
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
