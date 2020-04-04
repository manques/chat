import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  touch = false;
  products = [
    { name: 'shirt', price: 200, url: '../../favicon.ico' },
    { name: 'shirt', price: 200, url: '../../favicon.ico' },
    { name: 'shirt', price: 200, url: '../../favicon.ico' },
    { name: 'shirt', price: 200, url: '../../favicon.ico' }
  ];
  contructor() {}
  ngOnInit() {}
  onTouch() {
    this.touch = !this.touch;
  }
}
