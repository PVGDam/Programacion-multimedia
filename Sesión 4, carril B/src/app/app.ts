import { Component } from '@angular/core';
import { TarjetaProducto } from './tarjeta-producto/tarjeta-producto';
import { FichaProducto } from './ficha-producto/ficha-producto';
import { Cabecera } from './cabecera/cabecera' 
import { ListaCompra } from './lista-compra/lista-compra';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TarjetaProducto, FichaProducto, Cabecera, ListaCompra],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
