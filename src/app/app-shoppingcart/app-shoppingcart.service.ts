import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Rx";

@Injectable()
export class AppShoppingcartService {
  public items: any[];

  constructor() {
    this.items = [
      {name: 'fish', price: 145},
      {name: 'peas', price: 25},
      {name: 'meat', price: 55},
    ].sort((i1, i2) => i2.price - i1.price);
  }

  add(item) {
    this.items.push({name: item.itemname, price: item.itemprice});
  }

  remove(item) {
    // this.items = this.items.filter((i) => i.name !== item.name);
    this.items.splice(this.items.indexOf(item), 1);
  }

}


