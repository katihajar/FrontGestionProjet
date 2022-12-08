import {User} from './user';
import {Task} from './task';
import {Services} from './services';

export class Project {
  public id: string;
  public nomProjet: string;
  public description: string;
  public statutChef: string;
  public statutDirect: string;
  public cout: number;
  public dateDebut = new Date().getFullYear()+'-'+new Date().getMonth()+'-'+ new Date().getDay();
  public dateFin= new Date().getFullYear()+'-'+new Date().getMonth()+'-'+ new Date().getDay();
  public user= new User();
  public services= new Services();
  public tasks = new Array<Task>();
}
