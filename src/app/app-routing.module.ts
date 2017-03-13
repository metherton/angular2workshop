import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppShoppingcartComponent } from './app-shoppingcart/app-shoppingcart.component'

const routes: Routes = [
  {path: 'shoppingcart', component: AppShoppingcartComponent}
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule {}
