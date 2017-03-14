import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {AppShoppingcartService} from "../app-shoppingcart/app-shoppingcart.service";

export class Item {
  constructor(public itemname: string, public itemprice: string) {
  }
}

@Component({
  selector: 'app-add-item',
  templateUrl: './app-add-item.component.html',
  styleUrls: ['./app-add-item.component.css']
})
export class AppAddItemComponent implements OnInit {

  model = new Item('', '');

  constructor(private shoppingCartService: AppShoppingcartService) { }

  ngOnInit() {
  }

  add() {
    this.shoppingCartService.add(this.model);
  }

}
