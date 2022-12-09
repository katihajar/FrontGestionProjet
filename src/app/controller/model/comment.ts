import {User} from './user';
import {Task} from './task';

export class Comment {
  public id: string;
  public comments: string;
  public user= new User();
  public task = new Task();
}
