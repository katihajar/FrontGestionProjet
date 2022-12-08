import {User} from './user';

export class Project {
  public id?: string;
  public nomProjet: string;
  public description: string;
  public statutChef: string;
  public statutDirect: string;
  public cout: number;
  public dateDebut:Date;
  public dateFin: Date;
  public user= new User();
}
