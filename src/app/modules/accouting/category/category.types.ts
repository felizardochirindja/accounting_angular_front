export interface Category {
    id?: string;
    type?: CategoryType;
}

enum CategoryType {
    Activo = 'Activo',
    Passivo = 'Passivo',
    Capital = 'Capital',
    Gastos = 'Gastos/Perdas',
    Rendimentos = 'Rendimentos/Ganhos',
    Resultados = 'Resultados',
}
