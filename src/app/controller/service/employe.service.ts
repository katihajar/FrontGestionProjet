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
  private _submitted: boolean;
  constructor(private http: HttpClient,private auth: AuthentificationService) {}

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
  initHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
      headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.UserAuth.accessToken}`,
      });
    return headers;
  }
}
