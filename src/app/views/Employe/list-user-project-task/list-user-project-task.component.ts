import {Component, Input, OnInit} from '@angular/core';
import {EmployeService} from '../../../controller/service/employe.service';
import {Project} from '../../../controller/model/project';
import {Task} from '../../../controller/model/task';

@Component({
  selector: 'app-list-user-project-task',
  templateUrl: './list-user-project-task.component.html',
  styleUrls: ['./list-user-project-task.component.css']
})
export class ListUserProjectTaskComponent implements OnInit {
  showModal = false;
  task=new Task();
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== 'light' && color !== 'dark' ? 'light' : color;
  }
  private _color = 'light';
  constructor(private emp:EmployeService) {}

  toggleModal(){
    this.showModal = !this.showModal;
  }
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
  get selectedTask(): Task {

    return this.emp.selectedTask;
  }

  set selectedTask(value: Task) {
    this.emp.selectedTask = value;
  }
  addTask(){
    console.log(this.selectedProject);
    this.selectedTask.pourcentage=0;
    this.selectedTask.project=this.selectedProject;
    this.emp.saveTask().subscribe(
      data => {
        if (data != null) {
          // tslint:disable-next-line:no-shadowed-variable
          this.emp.getTaskProject(this.selectedProject.id).subscribe(data=>{
            this.ListUserTask=data.body;
            console.log( 'first'+ this.ListUserTask);
            this.toggleModal();
          })
        }
      })
  }

  ngOnInit(): void {
    this._color='light';
    console.log('hadiiii '+this.selectedProject.id);
    console.log('hnaa'+this.ListUserTask);
  }

}
