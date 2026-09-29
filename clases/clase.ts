class empleado{
    constructor(public nombre: string, private _salarioBase: number, ){}

    salarioAnual(): number{
        return this._salarioBase*12;
    }

    get salarioMensualFormateado(): string{
        return `${this._salarioBase} €`;
    }
}