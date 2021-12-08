import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  constructor() {}

  valor: number = 12;
  destino: number = 2454;

  ngOnInit(): void {}

  transferir() {
    console.log('solicitada nova transferência');
    console.log('valor:', this.valor);
    console.log('destino:', this.destino);
  }
}
