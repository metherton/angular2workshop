import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Rx";

@Injectable()
export class AppShoppingcartService {
  public items: any[];

  constructor() {
    this.items = [
      {id: 1, name: 'fish', price: 145},
      {id: 2, name: 'peas', price: 25},
      {id: 3, name: 'meat', price: 55},
    ].sort((i1, i2) => i2.price - i1.price);
  }

  add(item) {
    this.items.push({name: item.itemname, price: item.itemprice});
  }

  remove(id) {
    this.items = this.items.filter((i) => i.id !== id);
  }

}


