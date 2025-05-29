import { Component, OnInit } from '@angular/core';
import { mockProducts } from '../product-list/product-list.mock';
import { Product } from './product.model';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})

export class ProductListComponent implements OnInit{
    products!: Product[];

    constructor() { }

    ngOnInit(): void {
        this.products = mockProducts;
    }
}
