import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from 'src/app/controller/model/role';
import { Services } from 'src/app/controller/model/services';
import { User } from 'src/app/controller/model/user';
import { AuthentificationService } from 'src/app/controller/service/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthentificationService,
    private router: Router
  ) {}
  get User(): User {
    return this.authService.User;
  }

  set User(value: User) {
    this.authService.User = value;
  }
  get ListService(): Array<Services> {
    return this.authService.ListService;
  }

  set ListService(value: Array<Services>) {
    this.authService.ListService = value;
  }
  get ListRole(): Array<Role> {
    return this.authService.ListRole;
  }

  set ListRole(value: Array<Role>) {
    this.authService.ListRole = value;
  }

  ngOnInit() {
    this.authService.getRole().subscribe(data => {
      this.ListRole=data ;
      console.log('hello 1', this.ListRole);
    });

    this.authService.getService().subscribe(data => {
      this.ListService = data;
      console.log('hello 2', this.ListService);
    });
  }
  signUp() {
    this.authService.SignUp(this.User).subscribe((response: any) => {
      console.log(response);
      this.router.navigate(['/login']);
    });
  }
}
