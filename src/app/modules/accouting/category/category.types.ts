export interface Category {
    id?: string;
    name?: string;
    type?: CategoryType;
}

export enum CategoryType {
    Activo = 'Activo',
    Passivo = 'Passivo',
    Capital = 'Capital',
    Gastos = 'Gastos/Perdas',
    Rendimentos = 'Rendimentos/Ganhos',
    Resultados = 'Resultados',
}
