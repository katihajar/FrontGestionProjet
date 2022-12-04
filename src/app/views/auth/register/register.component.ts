import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Role } from "src/app/controller/model/role";
import { Services } from "src/app/controller/model/services";
import { User } from "src/app/controller/model/user";
import { AuthentificationService } from "src/app/controller/service/authentification.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {
  user: User;

  role: Role[] = [];
  roleTable: Role;

  service: Services[] = [];
  serviceTable: Services;

  constructor(
    private authService: AuthentificationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.getRole().subscribe((resp: Role) => {
      this.role.push(resp);
      this.roleTable = this.role[0];
      console.log("hello 1", this.roleTable);
    });

    this.authService.getService().subscribe((resp: Services) => {
      this.service.push(resp);
      this.serviceTable = this.service[0];
      console.log("hello", this.serviceTable);
    });
  }
  signUp(formSignUp: NgForm) {
    this.user = {
      username: formSignUp.value.username,
      email: formSignUp.value.email,
      password: formSignUp.value.password,
      phone: formSignUp.value.phone,
      nom: formSignUp.value.nom,
      prenom: formSignUp.value.prenom,
      role: {
        name: formSignUp.value.name,
      },
      services: {
        nomService: formSignUp.value.nomService,
      },
      accountNonExpired: true,
      credentialsNonExpired: true,
      accountNonLocked: true,
      enabled: true,
    };
    this.authService.SignUp(this.user).subscribe((response: any) => {
      console.log(response);
    });
    this.router.navigate(["/login"]);
  }
}
