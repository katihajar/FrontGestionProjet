import {Component, Input, OnInit} from '@angular/core';
import {EmployeService} from '../../../controller/service/employe.service';
import {Project} from '../../../controller/model/project';
import {Task} from '../../../controller/model/task';
import {Comment} from '../../../controller/model/comment';
import {Router} from '@angular/router';

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
  get ListUserTask(): Array<Task> {
    return this.emp.ListUserTask;
  }

  set ListUserTask(value: Array<Task>) {
    this.emp.ListUserTask = value;
  }
  get ListComment(): Array<Comment> {
    return this.emp.ListComment;
  }

  set ListComment(value: Array<Comment>) {
    this.emp.ListComment = value;
  }
  get selectedTask(): Task {

    return this.emp.selectedTask;
  }

  set selectedTask(value: Task) {
    this.emp.selectedTask = value;
  }
  ngOnInit(): void {
    console.log('hnaa'+this.ListTask);
  }

  public seeComment(t:Task){
    this.selectedTask = t;
    this.emp.getCommentTask(t.id).subscribe(data=>{
      this.ListComment=data.body;
      console.log( 'first'+ this.ListComment);
      this.router.navigate(['/emp/listComment']);
    })
  }
}
