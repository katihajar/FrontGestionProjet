import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/controller/model/project';
import { Task } from 'src/app/controller/model/task';
import { ChefDeServiceService } from 'src/app/controller/service/chefDeService.service';

@Component({
  selector: 'app-list-task-project',
  templateUrl: './list-task-project.component.html',
  styleUrls: ['./list-task-project.component.css']
})
export class ListTaskProjectComponent implements OnInit {
  showModal = false;
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== 'light' && color !== 'dark' ? 'light' : color;
  }
  private _color = 'light';
  constructor(private emp:ChefDeServiceService) {}

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
  get selectedTask(): Task {

    return this.emp.selectedTask;
  }

  set selectedTask(value: Task) {
    this.emp.selectedTask = value;
  }
  Validate(){
    console.log(this.selectedTask);
    this.emp.ValidateTaskStatusChef().subscribe(
      data => {
        if (data != null) {
          // tslint:disable-next-line:no-shadowed-variable
          this.emp.getTaskProject(this.selectedProject.id).subscribe(data=>{
            this.ListTask=data.body;
            this.showModal = !this.showModal;
            this.selectedTask = new Task();
            console.log(data);
          })

        }
      })
  }
  toggle(t: Task){
    this.selectedTask = t;
    this.showModal = !this.showModal;
  }
  ngOnInit(): void {
    console.log('hnaa'+this.ListTask);
  }

}
