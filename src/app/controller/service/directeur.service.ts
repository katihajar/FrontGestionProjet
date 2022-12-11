import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Services} from '../model/services';
import {Project} from '../model/project';
import {Task} from '../model/task';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {AuthentificationService} from './authentification.service';
import {Userauth} from '../model/userauth';
import {Observable} from 'rxjs';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class DirecteurService {
  private url = environment.baseUrl;

  private _ListService: Array<Services>;
  private _ListProject: Array<Project>;
  private _ListServices: Array<Services>;
  private _selectedService: Services;
  private _Service: Services;
  private _ListTask: Array<Task>;
  private _ListChefDeProjetProject: Array<Project>;
  private _ListChefDeProjetTask: Array<Task>;
  private _selectedProject: Project;
  private _selectedTask: Task;
  private _selectedTask2: Task;
  private _submitted: boolean;
  constructor(
    private http: HttpClient,
    private auth: AuthentificationService
  ) {}

  get ListService(): Array<Services> {
    if (this._ListService == null) {
      this._ListService = new Array<Services>();
    }
    return this._ListService;
  }

  set ListService(value: Array<Services>) {
    this._ListService = value;
  }

  get selectedService(): Services {
    if (this._selectedService == null) {
      this._selectedService = new Services();
    }
    return this._selectedService;
  }

  set selectedService(value: Services) {
    this._selectedService = value;
  }
  get Service(): Services {
    if (this._Service == null) {
      this._Service = new Services();
    }
    return this._Service;
  }

  set Service(value: Services) {
    this._Service = value;
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
    if (this._ListChefDeProjetTask == null) {
      this._ListChefDeProjetTask = new Array<Task>();
    }
    return this._ListChefDeProjetTask;
  }

  set ListUserTask(value: Array<Task>) {
    this._ListChefDeProjetTask = value;
  }

  get ListUserProject(): Array<Project> {
    if (this._ListChefDeProjetProject == null) {
      this._ListChefDeProjetProject = new Array<Project>();
    }
    return this._ListChefDeProjetProject;
  }

  set ListUserProject(value: Array<Project>) {
    this._ListChefDeProjetProject = value;
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
  getChefDeProjetProject(): Observable<HttpResponse<Array<Project>>> {
    const headers: HttpHeaders = this.initHeaders();
    return this.http.get<Array<Project>>(
      this.url + 'api/project/userProject/' + this.User.id,
      { observe: 'response', headers }
    );
  }
  getProjectByid(id: string): Observable<HttpResponse<Array<Project>>> {
    console.log(id);
    const headers: HttpHeaders = this.initHeaders();
    return this.http.get<Array<Project>>(
      this.url + 'api/project/projectServives/' + id+'/accepte',
      { observe: 'response', headers }
    );
  }
  getAllProject(): Observable<HttpResponse<Array<Project>>> {
    const headers: HttpHeaders = this.initHeaders();
    return this.http.get<Array<Project>>(this.url + 'api/project/', {
      observe: 'response',
      headers,
    });
  }

  getTaskProject(id: string): Observable<HttpResponse<Array<Task>>> {
    const headers: HttpHeaders = this.initHeaders();
    return this.http.get<Array<Task>>(this.url + 'api/task/ProjectId/' + id, {
      observe: 'response',
      headers,
    });
  }

  /* chef de projet dont need to create projects */
  saveProject(): Observable<HttpResponse<Project>> {
    const headers: HttpHeaders = this.initHeaders();
    return this.http.post<Project>(
      this.url + 'api/project/',
      this.selectedProject,
      { observe: 'response', headers }
    );
  }
  saveTask(): Observable<HttpResponse<Task>> {
    const headers: HttpHeaders = this.initHeaders();
    return this.http.post<Task>(this.url + 'api/task/', this.selectedTask, {
      observe: 'response',
      headers,
    });
  }
  initHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.UserAuth.accessToken}`,
    });
    return headers;
  }
  ValidateProjectStatusDir(): Observable<HttpResponse<Project>> {
    const headers: HttpHeaders = this.initHeaders();
    return this.http.put<Project>(this.url + 'api/project/dir/',this.selectedProject,{ observe: 'response', headers });
  }
  ValidateTaskStatusDir(): Observable<HttpResponse<Task>> {
    const headers: HttpHeaders = this.initHeaders();
    return this.http.put<Task>(this.url + 'api/task/valdDir/',this.selectedTask,{ observe: 'response', headers });
  }
  getService(): Observable<HttpResponse<Array<Services>>> {
    const headers: HttpHeaders = this.initHeaders();
    return this.http.get<Array<Services>>(this.url + 'api/service/all',{ observe: 'response', headers });
  }
  saveService(): Observable<HttpResponse<Services>> {
    const headers: HttpHeaders = this.initHeaders();
    return this.http.post<Services>(this.url + 'api/service/',this.Service,{ observe: 'response', headers });
  }
}
