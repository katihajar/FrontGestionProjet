import {User} from './user';

export class Project {
  public id?: string;
  public nomProjet: string;
  public description: string;
  public statutChef: string;
  public statutDirect: string;
  public cout: number;
  public dateDebut = new Date().getFullYear()+'-'+new Date().getMonth()+'-'+ new Date().getDay();
  public dateFin= new Date().getFullYear()+'-'+new Date().getMonth()+'-'+ new Date().getDay();
  public user= new User();
}
