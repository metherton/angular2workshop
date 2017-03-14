import { Component, OnInit } from '@angular/core';
import {AppShoppingcartService} from "./app-shoppingcart.service";
import {Subscription} from "rxjs/Rx";

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './app-shoppingcart.component.html',
  styleUrls: ['./app-shoppingcart.component.css']
})
export class AppShoppingcartComponent implements OnInit {

  public items: any[];

  constructor(private shoppingCartService: AppShoppingcartService) {
  }

  ngOnInit() {
    this.items = this.shoppingCartService.items;
  }
}
