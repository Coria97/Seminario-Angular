import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";
import {Product} from "../product-list/product.model";

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent implements OnInit {
  products: Product[] = []

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.items.subscribe(items => {
      this.products = items;
    });
  }

  totalPrice(product: Product): number {
    return product.price * product.quantity;
  }

  total(){
    let total = 0;
    this.products.forEach(product => total += this.totalPrice(product));
    return total;
  }

  incrementQuantity(product: Product): void {
    product.quantity++;
    this.cartService.updateCart();
  }

  decrementQuantity(product: Product): void {
    if (product.quantity > 1) {
      product.quantity--;
      this.cartService.updateCart();
    }
  }

  removeProduct(product: Product): void {
    this.cartService.removeFromCart(product);
  }
}
