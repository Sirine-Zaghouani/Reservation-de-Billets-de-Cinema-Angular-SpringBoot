import { Salle } from "./Salle";
import { Time } from "./Time";
import { Film } from "./film";

export class Projection {
        map(arg0: (i: any) => void) {
          throw new Error('Method not implemented.');
        }
        public id!: number;
        public dateProjection! : Date;
        public salle! : Salle;
        public time! : Time;
        public film! : Film
}