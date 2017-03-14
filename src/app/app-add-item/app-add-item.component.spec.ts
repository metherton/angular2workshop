import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAddItemComponent } from './app-add-item.component';

describe('AppAddItemComponent', () => {
  let component: AppAddItemComponent;
  let fixture: ComponentFixture<AppAddItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAddItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
