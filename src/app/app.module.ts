import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppShoppingcartComponent } from './app-shoppingcart/app-shoppingcart.component';
import { AppShoppingcartService } from './app-shoppingcart/app-shoppingcart.service';
import { AppTodoItemComponent } from './app-todo-item/app-todo-item.component';
import { AppAddItemComponent } from './app-add-item/app-add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AppShoppingcartComponent,
    AppTodoItemComponent,
    AppAddItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AppShoppingcartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
