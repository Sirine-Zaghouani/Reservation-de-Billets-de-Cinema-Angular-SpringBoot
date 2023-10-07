import { User } from "./User";
import { Projection } from "./projection";

export class Reservation{
    id?:string ;
    user!:User;
    projection!:any;
    nbPlace!:number
 
} 