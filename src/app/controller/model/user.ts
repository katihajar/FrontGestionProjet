import {Role} from './role';
import {Services} from './services';

export class User {
  public id?: string;
  public username: string;
  public email: string;
  public password: string;
  public  phone: string;
  public  nom: string;
  public  prenom: string;
  public accountNonExpired = true;
  public credentialsNonExpired = true;
  public accountNonLocked = true;
  public enabled = true;
  public authorities ?: [];

    role : Role;
   services:Services;

}
