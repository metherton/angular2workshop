import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export class Item {
  constructor(public id: number, public itemname: string, public itemprice: string) {
  }
}

@Component({
  selector: 'app-add-item',
  templateUrl: './app-add-item.component.html',
  styleUrls: ['./app-add-item.component.css']
})
export class AppAddItemComponent implements OnInit {

  model = new Item(0,'', '');
  resetFormHack = true;

  @Output()
  itemAdded = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.itemAdded.next(this.model);
    console.log('Logging with', this.model.itemname, this.model.itemprice);
    this.model = new Item(0,'', '');
    this.resetFormHack = false;
    setTimeout(() => this.resetFormHack = true, 0);
  }

}
