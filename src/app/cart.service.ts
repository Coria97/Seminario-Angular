import { Injectable } from '@angular/core';
import { Product } from './product-list/product.model';
import {BehaviorSubject, Observable} from "rxjs";



@Injectable({providedIn: 'root'})
export class CartService {
  private _items: Product[] = [];
  private _itemsSubject: BehaviorSubject<Product[]> = new BehaviorSubject(this._items);
  public items: Observable<Product[]> = this._itemsSubject.asObservable();

  constructor() { }

  addToCart(product: Product) {
    let newProduct = Object.assign({}, product);
    let alreadyInCart = false;
  
    this._items.forEach((p: Product) => {
      if (p.id === newProduct.id) {
        alreadyInCart = true;
        p.quantity += 1;
      }
    });

    if (!alreadyInCart) {
      newProduct.quantity = 1;
      this._items.push(newProduct);
    }
  
    this._itemsSubject.next(this._items);
  }

  getItems() {
    return this._items;
  }

  updateCart() {
    this._itemsSubject.next(this._items);
  }

  removeFromCart(product: Product) {
    const index = this._items.findIndex(item => item.id === product.id);
    if (index > -1) {
      this._items.splice(index, 1);
      this._itemsSubject.next(this._items);
    }
  }

  clearCart() {
    this._items = [];
    this._itemsSubject.next(this._items);
  }

}
