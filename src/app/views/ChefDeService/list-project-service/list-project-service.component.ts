import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../../controller/model/project';
import {Task} from '../../../controller/model/task';
import {Router} from '@angular/router';
import { ChefDeServiceService } from 'src/app/controller/service/chefDeService.service';

@Component({
  selector: 'app-list-project-service',
  templateUrl: './list-project-service.component.html',
  styleUrls: ['./list-project-service.component.css']
})
export class ListProjectServiceComponent implements OnInit {
  showModal = false;
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== 'light' && color !== 'dark' ? 'light' : color;
  }
  private _color = 'light';


  constructor(private emp:ChefDeServiceService,private router: Router) {}
  toggleModal(){
    this.showModal = !this.showModal;
  }
  get ListProject(): Array<Project> {
    return this.emp.ListProject;
  }
  set ListProject(value: Array<Project>) {
    this.emp.ListProject = value;
  }
  get selectedProject(): Project {
    return this.emp.selectedProject;
  }

  set selectedProject(value: Project) {
    this.emp.selectedProject = value;
  }
  get ListTask(): Array<Task> {
    return this.emp.ListTask;
  }

  set ListTask(value: Array<Task>) {
    this.emp.ListTask = value;
  }
  Validate(){
    console.log(this.selectedProject);
    this.emp.ValidateProjectStatusChef().subscribe(
      data => {
        if (data != null) {
          // tslint:disable-next-line:no-shadowed-variable
          this.emp.getAllChefDeProjetProject().subscribe(data=>{
            this.ListProject=data.body;
            this.showModal = !this.showModal;
            this.selectedProject = new Project();
            console.log(data);
          })

        }
      })
  }
  toggle(p: Project){
    this.selectedProject = p;
    this.showModal = !this.showModal;
  }
  public seeTask(p:Project){
    this.selectedProject = p;
    this.emp.getTaskProject(p.id).subscribe(data=>{
      this.ListTask=data.body;
      console.log( 'first'+ this.ListTask);
      this.router.navigate(['/chef/projectTask']);
    })
  }
  ngOnInit() {
    this.emp.getAllChefDeProjetProject().subscribe(data=>{
      this.ListProject=data.body;
      console.log(data);
    })
  }

}








