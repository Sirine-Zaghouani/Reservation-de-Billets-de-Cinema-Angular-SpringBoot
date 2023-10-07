import { Film } from "./film";

export class FilmCategory {
    public id?: number;
    public categoryName?:string;
    public films!: Film[]
}