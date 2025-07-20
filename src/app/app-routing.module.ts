import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'products/:palette', component: ProductListComponent },
  { path: 'products/:footwear', component: ProductListComponent },
  { path: 'products/:clothing', component: ProductListComponent },
  { path: 'products/:accessories', component: ProductListComponent },
  { path: 'products/:offers', component: ProductListComponent },
  { path: 'cart', component: ShoppingCartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
