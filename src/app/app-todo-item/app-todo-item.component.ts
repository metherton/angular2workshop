import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {AppShoppingcartService} from '../app-shoppingcart/app-shoppingcart.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './app-todo-item.component.html',
  styleUrls: ['./app-todo-item.component.css']
})
export class AppTodoItemComponent implements OnInit {

  @Input()
  item: any;

  // @Output()
  // itemRemoved = new EventEmitter();

  constructor(private shoppingCartService: AppShoppingcartService) { }

  ngOnInit() {
  }

  remove() {
    this.shoppingCartService.remove(this.item);
  }

}
