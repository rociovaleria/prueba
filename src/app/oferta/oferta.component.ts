declare var $: any;
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Oferta } from './oferta.model';
@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss']
})
export class OfertaComponent implements OnInit {

  @Input() oferta: Oferta
  @Output() ofertamake = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public openModal() {
    $('#modal-oferta').modal('show');
  }

  public closeModal() {
    $('#modal-oferta').modal('hide');
  }

  public onClickOfertar() {
    this.ofertamake.emit(this.oferta);
  }

}
