import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-ficha-producto',
  styleUrl: './ficha-producto.css',
  templateUrl: './ficha-producto.html',
})

export class FichaProducto {

  nombre = "Caramelo";
  precio = 2.99;
  imagenUrl = "https://placehold.co/128x128.png";
  disponible = false;
  altUrl = "La imagen no carga";
}
