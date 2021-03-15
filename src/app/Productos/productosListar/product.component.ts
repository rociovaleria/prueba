import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Product } from './product.model';
import{MaterialModule} from '../../material/material.module';
import { title } from 'process';
import{ProductsService}from '../../products.service';
import {ProductoTemporalModel}from './productoTemporal.model';
import {AddProductComponent} from '../add-product/add-product.component';
interface Valor {
    value: string;
    viewValue: string;
  }
 
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent {
  productsTemporal:ProductoTemporalModel[]=[];
  producto: Product[]=[];
  constructor(
    //inyectar como dependencia 
    private productsService: ProductsService
  ){}
  ngOnInit(){
    this.fetchProducts();
  }
  fetchProducts(){
    //recibe con el subscribe
    this.productsService.getAllProducts2().subscribe(
      products=>{
        console.log(products);
        this.producto=products;
      }
    )
  }
  

   /*@Input() product: Product;
   @Output() productClicked:EventEmitter<any>= new EventEmitter();
   addCart(){
    console.log('productclick');
    this.productClicked.emit(this.product.id);
    */
 
  /*procesadores : Valor[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  frecuencias : Valor[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  generaciones : Valor[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  marcas : Valor[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];*/
 
}


