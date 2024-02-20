import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FuiIconComponent } from './fui-icon.component';

describe('FuiIconComponent', () => {
  let component: FuiIconComponent;
  let fixture: ComponentFixture<FuiIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuiIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FuiIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
