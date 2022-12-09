import {Component, Input, OnInit} from '@angular/core';
import {AuthentificationService} from '../../../controller/service/authentification.service';
import {Router} from '@angular/router';
import {Userauth} from '../../../controller/model/userauth';
import {User} from '../../../controller/model/user';
import {Task} from '../../../controller/model/task';
import {Project} from '../../../controller/model/project';
import {EmployeService} from '../../../controller/service/employe.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  ListAddTask= new Array<Task>();
  task=new Task();
  showModal = false;
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== 'light' && color !== 'dark' ? 'light' : color;
  }
  c=0;
  private _color = 'light';
  constructor(private auth: AuthentificationService,private router: Router,private emp:EmployeService) {}
  ngOnInit(): void {
    this.selectedProject= new Project();
    this._color = 'light';
    this.task.pourcentage=0;
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
  addTask(){
    this.ListAddTask.push(this.task);
    console.log(this.ListAddTask);
    this.task=new Task();
    this.task.pourcentage=0;

  }
  get selectedProject(): Project {
    return this.emp.selectedProject;
  }

  set selectedProject(value: Project) {
    this.emp.selectedProject = value;
  }
  AddProject() {
    this.selectedProject.tasks =this.ListAddTask;
    this.selectedProject.user =this.User;
    this.selectedProject.services=this.User.services;
    console.log(this.selectedProject);
    this.emp.saveProject().subscribe(
      data => {
        if (data != null) {
          this.selectedProject= new Project();
          this.router.navigate(['/emp/myProject']);
        }
      })

  }

}
