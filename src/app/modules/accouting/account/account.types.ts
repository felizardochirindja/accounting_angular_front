export interface Account {
    id?: string;
    code?: string;
    name?: string;
    parentId?: string;
    categoryId?: string;
    children?: Account[];
}
