import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-lista-compra',
  styleUrl: './lista-compra.css',
  templateUrl: './lista-compra.html',
})

export class ListaCompra {
  lista = ['leche', 'pan'];

  anadir(valor: string, campo: HTMLInputElement): void {
    const producto = valor.trim();

    if (producto && this.lista.length < 5) {
      this.lista.push(producto);
      campo.value = '';
    }
  }

  vaciar(): void {
    this.lista = [];
  }
}
