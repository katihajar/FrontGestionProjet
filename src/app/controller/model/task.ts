import {User} from './user';
import {Project} from './project';

export class Task {
  public id?: string;
  public nom: string;
  public taskDescription: string;
  public statutChef: string;
  public statutDirect: string;
  public pourcentage: number;
  public dateDebut = new Date().getFullYear()+'-'+new Date().getMonth()+'-'+ new Date().getDay();
  public dateFin= new Date().getFullYear()+'-'+new Date().getMonth()+'-'+ new Date().getDay();

  public project= new Project();
}
