import { Component, OnInit } from '@angular/core';
import { products } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  public products = products;
  share() {
    window.alert('The product has been shared!');
  }


}
