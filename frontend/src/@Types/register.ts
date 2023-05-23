export type Register = {
    description: string;
    category: string;
    name: string;
    url: string;
    whatsapp: string;
}

export type RegisterPage = {
    content: Register[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}