import { Component, OnInit, Input } from '@angular/core';
import { products } from '../product.model';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent {
  @Input() product;
}
