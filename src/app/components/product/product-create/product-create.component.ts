import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from './../product.service';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }

  product: Product = {
    name: '',
    price: null
  }
  ngOnInit(): void {

  }

  createProduct(): void {

    if (this.product.name == '' || this.product.price == null) {
      return this.productService.showMessage('Todos os campos devem ser preencidos!', true);
    }

    this.productService.create(this.product).subscribe(() => {
      this.router.navigate(['/products'])
      this.productService.showMessage('Produto criado!');
      this.clearForm();
    });
  }

  cancelProduct(): void {
    this.router.navigate(['/products'])
  }

  clearForm() {
    this.product.name = '';
    this.product.price = null;
  }
}
