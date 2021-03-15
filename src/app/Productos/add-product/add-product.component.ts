import { Component, OnInit } from '@angular/core';
import {ProductoTemporalModel} from '../productosListar/productoTemporal.model';
import {Product} from '../productosListar/product.model';
import{ProductsService}from '../../products.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {FormBuilder, FormGroup , Validator, Validators} from '@angular/forms';
import{AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators'
import { Observable } from 'rxjs';


interface Valor {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})

export class AddProductComponent implements OnInit {

 // product:ProductoTemporalModel;
  product:Product;
  form: FormGroup;
  id: number;

  procesadores : Valor[] = [
    {value: 'Ryzen9-5950X', viewValue: 'Ryzen 9 5950X'},
    {value: 'Ryzen9-3950X', viewValue: 'Ryzen 9 3950X'},
    {value: 'Ryzen9-5900X', viewValue: 'Ryzen 9 3950X'},
    {value: 'Ryzen9-3900X', viewValue: 'Ryzen 9 3900X'},
    {value: 'Ryzen7-5800X', viewValue: 'Ryzen 7 5800X'},
    {value: 'Ryzen5-3600X', viewValue: 'Ryzen 5 3600X'},
    {value: 'Ryzen3-3100', viewValue: 'Ryzen 3 3100'},
    {value: 'Intel Corei3', viewValue: 'Intel Core i3 10100F'},
    {value: 'Intel Corei5', viewValue: 'Intel Core i5 10600K'},
    {value: 'Intel Corei7', viewValue: 'Intel Core i7 10700F'}
  ];

  generaciones : Valor[] = [
    {value: '1', viewValue: 'Primera generacion'},
    {value: '2', viewValue: 'Segunda generacion'},
    {value: '3', viewValue: 'Tercera generacion'},
    {value: '5', viewValue: 'Quinta generacion'},
    {value: '6', viewValue: 'Sexta generacion'},
    {value: '7', viewValue: 'Septima generacion'},
    {value: '8', viewValue: 'Octava generacion'},
    {value: '9', viewValue: 'Novena generacion'}
  ];
  marcas : Valor[] = [
    {value: 'acer', viewValue: 'Acer'},
    {value: 'apple', viewValue: 'Apple'},
    {value: 'lenovo', viewValue: 'Lenovo'},
    {value: 'hp', viewValue: 'Hp'},
    {value: 'alienware', viewValue: 'Alienware'},
    {value: 'dell', viewValue: 'Dell'},
    {value: 'asus', viewValue: 'Asus'},
    {value: 'samsung', viewValue: 'Samsung'},
    {value: 'nvidea', viewValue: 'Nvidea'},
    {value: 'amd', viewValue: 'Amd'},
    {value: 'nox', viewValue: 'Nox'},
    {value: 'msi', viewValue: 'Msi'},
    {value: 'logitech', viewValue: 'Logitech'},
  ];
  tipos : Valor[] = [
    {value: 'casa', viewValue: 'Casa'},
    {value: 'gamer', viewValue: 'Gamer'},
    {value: 'oficina', viewValue: 'Oficina'},
  
  ];
  //simbolo de observable $
   image$:Observable<any>;

  constructor(
    private route: Router,
    private router: ActivatedRoute,
         //inyectar como dependencia 
        
         private productsService: ProductsService,
         private fromBuilder: FormBuilder,
        private storage:AngularFireStorage

  ) {
    this.buildForm();
   }

  ngOnInit(): void {
    this.router.params.subscribe((param: Params)=>{
      const id= param.id;

    this.id=id;
    console.log('este es el id+'+id);
    });
  }
  
  saveProduct(event: Event){
    //para evitar que el formulario recargue despues de mandar a guardar 
    event.preventDefault();
    //verificarr o asegurarnos que el formulario tiene los datos correctos 
    if(this.form.valid){
      const product=this.form.value;
      this.productsService.createProduct(product).subscribe((productoResponse)=>{
      //  console.log(" server respuesta");
        console.log(this.form);
        console.log(productoResponse);
        this.route.navigate(['./productos'])
      }
      )
    
    console.log("formvalue")
    console.log(this.form.value);
    }
  }
  uploadFile(event){

  const file=event.target.files[0];
  const name=file.name;
  //que referencia tiene el archivo
  const filRef= this.storage.ref(name);
  const task= this.storage.upload(name,file);
  //para saber el progreso de subida de una imagen devuelve un observable
  task.snapshotChanges().pipe(finalize(()=>{
    this.image$=filRef.getDownloadURL();
    this.image$.subscribe(url=>{
      this.form.get('image').setValue(url);
    })
  })).subscribe();

  }
   private buildForm(){
     //form builder para hacer un formgrup
     this.form=this.fromBuilder.group({
       codigoprod:['',[Validators.required]],
       descripcion:['',[Validators.required]],
       stock:['',[Validators.required]],
       modelo:['',[Validators.required]],
       marca:['',[Validators.required]],
       procesador:['',],
       image:[],
       generacion:['',],
       memoria:['',],
       almacenamiento:['',],
       pantalla:['',[]],
       tarjetagrafica:['',],
       precio:['',[Validators.required]],
       descuento:['',[Validators.required]],
       tipo:['',[]],
       tiendaId:['',[Validators.required]],
     });

   }

}
