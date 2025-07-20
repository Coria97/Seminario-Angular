import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductDataService } from '../product-data.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})

export class ProductListComponent implements OnInit{
  products!: Product[];

  constructor(private productDataService: ProductDataService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productDataService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  calculateOfferPrice(product: Product): number {
    if (product.offer > 0) {
        return parseFloat((product.price * (1 - product.offer / 100)).toFixed(2));
    }
    return product.price;
  }

  hasOffer(product: Product): boolean {
    return product.offer > 0;
  }

  getDiscountAmount(product: Product): number {
    if (product.offer > 0) {
        return parseFloat((product.price * (product.offer / 100)).toFixed(2));
    }
    return 0;
  }

  addCart(product: Product) {
    this.cartService.addToCart(product);
    product.stock -= product.quantity;
  }
}
