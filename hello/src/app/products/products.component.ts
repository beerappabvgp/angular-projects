import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
    { productName: 'iPhone', category: 'Mobile', quantity: '10' },
    { productName: 'Samsung Galaxy', category: 'Mobile', quantity: '15' },
    { productName: 'MacBook Pro', category: 'Laptop', quantity: '5' },
    { productName: 'Dell XPS 13', category: 'Laptop', quantity: '8' },
    { productName: 'iPad', category: 'Tablet', quantity: '12' },
    { productName: 'Amazon Kindle', category: 'Tablet', quantity: '20' },
    { productName: 'Sony WH-1000XM4', category: 'Headphones', quantity: '30' },
    { productName: 'Bose QuietComfort 35', category: 'Headphones', quantity: '25' },
    { productName: 'Samsung QLED TV', category: 'Television', quantity: '6' },
    { productName: 'LG OLED TV', category: 'Television', quantity: '7' },
    { productName: 'Logitech MX Master 3', category: 'Accessories', quantity: '40' },
    { productName: 'Apple Magic Mouse', category: 'Accessories', quantity: '35' },
    { productName: 'Fitbit Charge 4', category: 'Wearables', quantity: '22' },
    { productName: 'Apple Watch Series 6', category: 'Wearables', quantity: '18' },
    { productName: 'Google Nest Thermostat', category: 'Smart Home', quantity: '14' },
    { productName: 'Amazon Echo Dot', category: 'Smart Home', quantity: '50' }
  ];
}
