import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBarActionComponent } from './app-bar-action.component';

describe('AppBarActionComponent', () => {
  let component: AppBarActionComponent;
  let fixture: ComponentFixture<AppBarActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppBarActionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppBarActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
