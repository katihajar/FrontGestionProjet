import {Component, Input, OnInit} from '@angular/core';
import {EmployeService} from '../../../controller/service/employe.service';
import {Project} from '../../../controller/model/project';
import {Task} from '../../../controller/model/task';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-service-project',
  templateUrl: './list-service-project.component.html',
  styleUrls: ['./list-service-project.component.css']
})
export class ListServiceProjectComponent implements OnInit {
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== 'light' && color !== 'dark' ? 'light' : color;
  }
  private _color = 'light';
  constructor(private emp:EmployeService,private router: Router) {}
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

  public seeTask(id:string){
    this.emp.getTaskProject(id).subscribe(data=>{
      this.ListTask=data.body;
      console.log( 'first'+ this.ListTask);
      this.router.navigate(['/emp/projectTask']);
    })
  }
  ngOnInit() {
    this.emp.getAllEmployeProject().subscribe(data=>{
      this.ListProject=data.body;
      console.log(data);
    })
  }

}
