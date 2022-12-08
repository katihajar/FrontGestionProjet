import {Component, Input, OnInit} from '@angular/core';
import {EmployeService} from '../../../controller/service/employe.service';
import {Project} from '../../../controller/model/project';
import {Task} from '../../../controller/model/task';

@Component({
  selector: 'app-list-all-task',
  templateUrl: './list-all-task.component.html',
  styleUrls: ['./list-all-task.component.css']
})
export class ListAllTaskComponent implements OnInit {
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== 'light' && color !== 'dark' ? 'light' : color;
  }
  private _color = 'light';
  constructor(private emp:EmployeService) {}


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

  ngOnInit(): void {
    console.log('hnaa'+this.ListTask);
  }

}
