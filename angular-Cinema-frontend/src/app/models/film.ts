import { Time } from "@angular/common";
import { FilmCategory } from "./film-category";

export class Film {
    
        public id?: number;
        public name?:string;
        public director?:string;
        public description?:string;
        public duration?:Time;
        public price?:number;
        public image?:string;
        public video?:string;
        public stock?:number;
        public date_created?:Date ;
        public date_updated?:Date;
        public category!:FilmCategory
        

    }