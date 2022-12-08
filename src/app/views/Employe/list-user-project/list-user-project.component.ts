import {Component, Input, OnInit} from '@angular/core';
import {EmployeService} from '../../../controller/service/employe.service';
import {Router} from '@angular/router';
import {Project} from '../../../controller/model/project';
import {Task} from '../../../controller/model/task';

@Component({
  selector: 'app-list-user-project',
  templateUrl: './list-user-project.component.html',
  styleUrls: ['./list-user-project.component.css']
})
export class ListUserProjectComponent implements OnInit {

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== 'light' && color !== 'dark' ? 'light' : color;
  }
  private _color = 'light';
  constructor(private emp:EmployeService,private router: Router) {}
  get ListUserProject(): Array<Project> {
    return this.emp.ListUserProject;
  }

  set ListUserProject(value: Array<Project>) {
    this.emp.ListUserProject= value;
  }
  get selectedProject(): Project {
    return this.emp.selectedProject;
  }

  set selectedProject(value: Project) {
    this.emp.selectedProject = value;
  }
  get ListUserTask(): Array<Task> {
    return this.emp.ListUserTask;
  }

  set ListUserTask(value: Array<Task>) {
    this.emp.ListUserTask = value;
  }

  public seeTask(id:string){
    this.emp.getTaskProject(id).subscribe(data=>{
      this.ListUserTask=data.body;
      console.log( 'first'+ this.ListUserTask);
      this.router.navigate(['/emp/myprojectTask']);
    })
  }
  ngOnInit() {
    this.emp.getEmployeProject().subscribe(data=>{
      this.ListUserProject=data.body;
      console.log(data);
    })
  }


}
