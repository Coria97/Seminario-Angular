import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {
  cartItemsCount: number = 0;
  private cartSubscription: Subscription = new Subscription();

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartSubscription = this.cartService.items.subscribe(() => {
      this.cartItemsCount = this.cartService.getTotalItemsCount();
    });
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }
}
