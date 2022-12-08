import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';

import {Services} from '../model/services';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Role} from '../model/role';
import {Project} from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  private url = environment.baseUrl;

  private _ListService: Array<Services>;
  private _submitted: boolean;
  constructor(private http: HttpClient) {}

  getEmployeProject(): Observable<Array<Project>> {
    return this.http.get<Array<Project>>(this.url + 'api/role/allRoles');
  }
  getAllProject(): Observable<Array<Project>> {
    return this.http.get<Array<Project>>(this.url + 'api/role/allRoles');
  }
}
