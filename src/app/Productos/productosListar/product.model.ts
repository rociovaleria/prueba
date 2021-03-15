export interface Product{
    id:number;
    codigoprod: string;
    descripcion: string;
    stock: number;
    marca:string; //select
    modelo: string; //ingresar
    procesador:string; //select
   // frecuencia:string;  //select
    generacion:number; //select
    memoria: number;    //ingresar mas prefix
    almacenamiento: string;//ingresar mas suffix
    //disco_duro:number; //ingresar mas siffix
    pantalla: number; //ingresar mas suffix
    tarjetagrafica:string;  //ingresar
    precio:number; // ingresar suffix
    descuento:number;//ingrear suffix
    tipo: string; // select gamer-casa- suffix
    image: string;//ingresar
    tiendaId: number;

}