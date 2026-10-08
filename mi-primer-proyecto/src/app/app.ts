import { Component } from '@angular/core';
import { TarjetaProducto } from './tarjeta-producto/tarjeta-producto';
import { FichaProducto } from './ficha-producto/ficha-producto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TarjetaProducto, FichaProducto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
