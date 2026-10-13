import { Component, OnInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-lista-compra',
  styleUrl: './lista-compra.css',
  templateUrl: './lista-compra.html',
})
export class ListaCompra implements OnInit {
  lista = ['leche', 'pan'];

  readonly limite = 20;
  readonly maximo = 5;
  readonly textoListaVacia = 'La lista está vacía';

  nuevoArticulo = '';

  get contador(): number {
    return this.nuevoArticulo.length;
  }

  get puedeAnadir(): boolean {
    return this.nuevoArticulo.trim().length > 0
      && this.contador <= this.limite
      && this.lista.length < this.maximo;
  }

  ngOnInit(): void {
    console.log(this.lista.length);
  }

  actualizarArticulo(evento: Event): void {
    const campo = evento.target as HTMLInputElement;
    this.nuevoArticulo = campo.value;
  }

  anadir(): void {
    if (!this.puedeAnadir) {
      return;
    }

    this.lista.push(this.nuevoArticulo.trim());
    this.nuevoArticulo = '';
  }

  vaciar(evento: MouseEvent): void {
    if (evento.shiftKey) {
      this.lista = [];
    }
  }
}
