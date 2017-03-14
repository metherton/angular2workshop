import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTodoItemComponent } from './app-todo-item.component';

describe('AppTodoItemComponent', () => {
  let component: AppTodoItemComponent;
  let fixture: ComponentFixture<AppTodoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTodoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
