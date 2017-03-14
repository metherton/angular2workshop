import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './app-shoppingcart.component.html',
  styleUrls: ['./app-shoppingcart.component.css']
})
export class AppShoppingcartComponent implements OnInit {

  public items: any[];
  static nextId = 4;

  constructor() {
    this.items = [
      {id: 1, name: 'fish', price: 145},
      {id: 2, name: 'peas', price: 25},
      {id: 3, name: 'meat', price: 55},
    ].sort((i1, i2) => i2.price - i1.price);
  }

  ngOnInit() {
  }

  add(item) {
    this.items.push({id: AppShoppingcartComponent.nextId, name: item.itemname, price: item.itemprice});
    AppShoppingcartComponent.nextId++;
  }

  remove(id) {
    this.items = this.items.filter((i) => i.id !== id);
  }

}
