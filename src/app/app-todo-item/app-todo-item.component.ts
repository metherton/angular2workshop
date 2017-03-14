import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './app-todo-item.component.html',
  styleUrls: ['./app-todo-item.component.css']
})
export class AppTodoItemComponent implements OnInit {

  @Input()
  item: any;

  @Output()
  itemRemoved = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  remove() {
    this.itemRemoved.next(this.item.id);
  }

}
