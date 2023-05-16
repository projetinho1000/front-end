export type Movie = {
    id: string;
    description: string;
    category: string;
    name: string;
    url: string;
    whatsapp: string;
}

export type MoviePage = {
    content: Movie[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}