import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppShoppingcartComponent } from './app-shoppingcart.component';

describe('AppShoppingcartComponent', () => {
  let component: AppShoppingcartComponent;
  let fixture: ComponentFixture<AppShoppingcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppShoppingcartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppShoppingcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
