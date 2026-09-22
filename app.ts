interface ItemCarrito {
    id: number;
    nombre: string;
    precioUnidad: number;
    cantidad: number;
    notas?: string;
}

const carrito: ItemCarrito[] = [
    {
        id: 1,
        nombre: "Auriculares inalámbricos",
        precioUnidad: 29.99,
        cantidad: 1,
        notas: "Color negro",
    },
    {
        id: 2,
        nombre: "Teclado mecánico",
        precioUnidad: 74.5,
        cantidad: 1
    },
    {
        id: 3,
        nombre: "Ratón inalámbrico",
        precioUnidad: 19.99,
        cantidad: 2,
        notas: "Uno para casa y otro para la oficina"
    },
    {
        id: 4,
        nombre: "Alfombrilla para ratón",
        precioUnidad: 12.95,
        cantidad: 1
    },
    {
        id: 5,
        nombre: "Cable USB-C",
        precioUnidad: 8.49,
        cantidad: 3,
        notas: "Cable de 2 metros"
    }
];

function precioTotal(items: ItemCarrito[]): number {

    return items.reduce((total, i) => total + (i.precioUnidad * i.cantidad), 0)
}

console.log(precioTotal(carrito) + " €")