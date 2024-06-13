import { AfterViewInit, Component, ElementRef, HostListener, computed, contentChildren, model, signal, viewChild } from '@angular/core';
import { SwiperBladeComponent } from './swiper-blade.component';

@Component({
  selector: 'fui-swiper',
  standalone: true,
  templateUrl: './swiper.component.html'
})
export class SwiperComponent implements AfterViewInit {

  _container = viewChild<ElementRef>('container');
  _blades = contentChildren(SwiperBladeComponent, { read: ElementRef });

  _viewPortWidth = signal(window.innerWidth);
  _isInitialized = signal(false);
  _enableAnimation = signal(false);

  _childCount = computed(() => this._container()?.nativeElement.children?.length);

  _heightCalcParams = computed(() => ({ 
    isInitialized: this._isInitialized(), 
    viewPortWidth: this._viewPortWidth(), 
    activatedBladeIndex: this.activatedBladeIndex() 
  }));

  _height = computed(() => this._heightCalcParams().isInitialized ? this._blades()[this._heightCalcParams().activatedBladeIndex].nativeElement.offsetHeight : 0);

  _x0: any = null;

  activatedBladeIndex = model(0);
  isInitialized = this._isInitialized.asReadonly();

  ngAfterViewInit(): void {
    // Set initialized after next rendering and enable animation also later
    setTimeout(() => {
      this._isInitialized.set(true)
      setTimeout(() => {
        this._enableAnimation.set(true)
      }, 50);
    }, 0);
  }

  onTouchstart(e: any) {
    this._x0 = this.unify(e).clientX;
  }

  onTouchmove(e: any) {
    //e.preventDefault();
  }

  onTouched(e: any) {
    if (this._x0 || this._x0 === 0) {
      const dx = this.unify(e).clientX - this._x0;
    
      if(dx > 90) {
        const s = Math.sign(dx);

        const i = this.activatedBladeIndex();
        if ((i > 0 || s < 0) && (i < this._childCount() - 1 || s > 0)) {
          this.activatedBladeIndex.set(i - s);
        }
        this._x0 = null;
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const currentWidth = event.target.innerWidth;
    this._viewPortWidth.set(currentWidth);
  }

  private unify(e: any) {
    return e.changedTouches ? e.changedTouches[0] : e
  }

}
