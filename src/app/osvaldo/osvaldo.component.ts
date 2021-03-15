import { Component, OnInit, Input} from '@angular/core';
import { ProductoTemporalModel } from '../Productos/productosListar/productoTemporal.model';

@Component({
  selector: 'app-osvaldo',
  templateUrl: './osvaldo.component.html',
  styleUrls: ['./osvaldo.component.scss']
})
export class OsvaldoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() producto: ProductoTemporalModel;
}
