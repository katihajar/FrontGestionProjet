import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { tokenReference } from '@angular/compiler';
import { Userauth } from '../model/userauth';
import {Services} from '../model/services';
import {Role} from '../model/role';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  private url = environment.baseUrl;
  private _User: User;
  private _authUs: Userauth;
  private _ListUser: Array<User>;
  private _ListRole: Array<Role>;
  private _ListService: Array<Services>;
  private _submitted: boolean;
  constructor(private http: HttpClient) {}


  get ListRole(): Array<Role> {
    if (this._ListRole == null) {
      this._ListRole = new Array<Role>();
    }
    return this._ListRole;
  }

  set ListRole(value: Array<Role>) {
    this._ListRole = value;
  }

  get ListService(): Array<Services> {
    if (this._ListService == null) {
      this._ListService = new Array<Services>();
    }
    return this._ListService;
  }

  set ListService(value: Array<Services>) {
    this._ListService = value;
  }

  get submitted(): boolean {
    return this._submitted;
  }

  set submitted(value: boolean) {
    this._submitted = value;
  }
  get User(): User {
    if (this._User == null) {
      this._User = new User();
    }
    return this._User;
  }

  set User(value: User) {
    this._User = value;
  }
  get UserAuth(): Userauth {
    if (this._authUs == null) {
      this._authUs = new Userauth();
    }
    return this._authUs;
  }

  set UserAuth(value: Userauth) {
    this._authUs = value;
  }

  get ListUser(): Array<User> {
    if (this._ListUser == null) {
      this._ListUser = new Array<User>();
    }
    return this._ListUser;
  }

  set ListUser(value: Array<User>) {
    this._ListUser = value;
  }
  // public saveUser(): Observable<number> {
  //     return this.http.post<number>(this.url+'admin/', this.User);
  // }
  public Login(user: string, pass: string): Observable<HttpResponse<Userauth>> {
    const headers: HttpHeaders = this.initHeaders();
    return this.http.post<Userauth>(
      this.url + 'api/auth/login',
      { username: user, password: pass },
      { observe: 'response', headers }
    );
  }
  initHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('accessToken');
    if (token !== null) {
      headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.UserAuth.accessToken}`,
      });
    }
    return headers;
  }
  SignUp(userToRegister: User) {
    return this.http.post(this.url + 'api/auth/signup', userToRegister);
  }
  getService(): Observable<Array<Services>> {
  return this.http.get<Array<Services>>(this.url + 'api/service/all');
}
  getRole(): Observable<Array<Role>> {
    return this.http.get<Array<Role>>(this.url + 'api/role/allRoles');
  }
}
