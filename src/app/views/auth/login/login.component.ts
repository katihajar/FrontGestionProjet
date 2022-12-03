import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../../controller/service/authentification.service';
import {User} from '../../../controller/model/user';
import {Userauth} from '../../../controller/model/userauth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
   userName='';
  pass='';
  user: User = new User();
  constructor(private auth: AuthentificationService) {}
  ngOnInit(): void {}

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

  SignIn(us :string,pass1:string) {
    console.log('userna '+us+' paass '+pass1);
    this.auth.Login(us,pass1).subscribe(
      data => {
        if (data != null) {
          console.log('hna data : '+(data.body));
        this.UserAuth =data.body;
        this.User= this.UserAuth.user;
          console.log('tken: '+ (this.UserAuth.accessToken) );
          console.log('us: '+ JSON.stringify(this.User.role.name) );
         // console.log(this.user.username)
        }
      })}
}
