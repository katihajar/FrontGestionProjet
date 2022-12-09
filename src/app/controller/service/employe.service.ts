import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';

import {Services} from '../model/services';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from '../model/project';
import {AuthentificationService} from './authentification.service';
import {User} from '../model/user';
import {Userauth} from '../model/userauth';
import {Task} from '../model/task';
import {Comment} from '../model/comment';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  private url = environment.baseUrl;

  private _ListService: Array<Services>;
  private _ListProject:Array<Project>;
  private _ListTask:Array<Task>;
  private _ListUserProject:Array<Project>;
  private _ListUserTask:Array<Task>;
  private _selectedProject:Project;
  private _selectedTask:Task;
  private _selectedTask2:Task;
  private _selectedComment:Comment;
  private _ListComment: Array<Comment>;
  private _submitted: boolean;
  constructor(private http: HttpClient,private auth: AuthentificationService) {}

  get ListComment(): Array<Comment> {
    if (this._ListComment == null) {
      this._ListComment = new Array<Comment>();
    }
    return this._ListComment;
  }

  set ListComment(value: Array<Comment>) {
    this._ListComment = value;
  }

  get selectedComment(): Comment {
    if (this._selectedComment == null) {
      this._selectedComment = new Comment();
    }
    return this._selectedComment;
  }

  set selectedComment(value: Comment) {
    this._selectedComment = value;
  }

  get selectedTask(): Task {
    if (this._selectedTask == null) {
      this._selectedTask = new Task();
    }
    return this._selectedTask;
  }

  set selectedTask(value: Task) {
    this._selectedTask = value;
  }
  get selectedTask2(): Task {
    if (this._selectedTask2 == null) {
      this._selectedTask2 = new Task();
    }
    return this._selectedTask2;
  }

  set selectedTask2(value: Task) {
    this._selectedTask2 = value;
  }
  get ListUserTask(): Array<Task> {
    if (this._ListUserTask == null) {
      this._ListUserTask = new Array<Task>();
    }
    return this._ListUserTask;
  }

  set ListUserTask(value: Array<Task>) {
    this._ListUserTask = value;
  }

  get ListUserProject(): Array<Project> {
    if (this._ListUserProject == null) {
      this._ListUserProject = new Array<Project>();
    }
    return this._ListUserProject;
  }

  set ListUserProject(value: Array<Project>) {
    this._ListUserProject = value;
  }
  get ListTask(): Array<Task> {
    if (this._ListTask == null) {
      this._ListTask = new Array<Task>();
    }
    return this._ListTask;
  }

  set ListTask(value: Array<Task>) {
    this._ListTask = value;
  }

  get ListProject(): Array<Project> {
    if (this._ListProject == null) {
      this._ListProject = new Array<Project>();
    }
    return this._ListProject;
  }

  set ListProject(value: Array<Project>) {
    this._ListProject = value;
  }
  get selectedProject(): Project {
    if (this._selectedProject == null) {
      this._selectedProject = new Project();
    }
    return this._selectedProject;
  }

  set selectedProject(value: Project) {
    this._selectedProject = value;
  }
  get User(): User {
    return this.auth.User;
  }

  set User(value: User) {
    this.auth.User = value;
  }
  get UserAuth(): Userauth {
    return this.auth.UserAuth;
  }

  set UserAuth(value: Userauth) {
    this.auth.UserAuth = value;
  }
  getEmployeProject(): Observable<HttpResponse<Array<Project>>> {
    const headers: HttpHeaders = this.initHeaders();
    return this.http.get<Array<Project>>(this.url + 'api/project/userProject/'+this.User.id,{ observe: 'response', headers });
  }
  getAllEmployeProject(): Observable<HttpResponse<Array<Project>>> {
    console.log(this.User.services.id);
    const headers: HttpHeaders = this.initHeaders();
    return this.http.get<Array<Project>>(this.url + 'api/project/serviveProject/'+this.User.services.id,{ observe: 'response', headers });
  }
  getAllProject(): Observable<HttpResponse<Array<Project>>> {
    const headers: HttpHeaders = this.initHeaders();
    return this.http.get<Array<Project>>(this.url + 'api/project/',{ observe: 'response', headers });
  }

  getTaskProject(id:string): Observable<HttpResponse<Array<Task>>> {
    const headers: HttpHeaders = this.initHeaders();
    return this.http.get<Array<Task>>(this.url + 'api/task/ProjectId/'+id,{ observe: 'response', headers });
  }
  getCommentTask(id:string): Observable<HttpResponse<Array<Comment>>> {
    const headers: HttpHeaders = this.initHeaders();
    return this.http.get<Array<Comment>>(this.url + 'api/comment/id/'+id,{ observe: 'response', headers });
  }
  saveProject(): Observable<HttpResponse<Project>> {
    const headers: HttpHeaders = this.initHeaders();
    return this.http.post<Project>(this.url + 'api/project/',this.selectedProject,{ observe: 'response', headers });
  }
  saveTask(): Observable<HttpResponse<Task>> {
    const headers: HttpHeaders = this.initHeaders();
    return this.http.post<Task>(this.url + 'api/task/',this.selectedTask,{ observe: 'response', headers });
  }
  saveComment(): Observable<HttpResponse<Comment>> {
    const headers: HttpHeaders = this.initHeaders();
    console.log('medwd'+this.selectedComment);
    return this.http.post<Comment>(this.url + 'api/comment/',this.selectedComment,{ observe: 'response', headers });
  }
  editPourcentage(): Observable<HttpResponse<Task>> {
    const headers: HttpHeaders = this.initHeaders();
    return this.http.put<Task>(this.url + 'api/task/hna',this.selectedTask2,{ observe: 'response', headers });
  }
  initHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
      headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.UserAuth.accessToken}`,
      });
    return headers;
  }
}
