import {Component, Input, OnInit} from '@angular/core';
import {ChefDeServiceService} from '../../../controller/service/chefDeService.service';
import {EmployeService} from '../../../controller/service/employe.service';
import {Router} from '@angular/router';
import {Project} from '../../../controller/model/project';
import {Task} from '../../../controller/model/task';
import {Comment} from '../../../controller/model/comment';
import {DirecteurService} from '../../../controller/service/directeur.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  showModal = false;
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== 'light' && color !== 'dark' ? 'light' : color;
  }
  private _color = 'light';
  constructor(private emp:DirecteurService, private emp2: EmployeService,private router: Router) {}

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
  get selectedTask2(): Task {

    return this.emp2.selectedTask;
  }

  set selectedTask2(value: Task) {
    this.emp2.selectedTask = value;
  }
  Validate(){
    console.log(this.selectedTask);
    this.emp.ValidateTaskStatusDir().subscribe(
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
  get ListComment(): Array<Comment> {
    return this.emp2.ListComment;
  }

  set ListComment(value: Array<Comment>) {
    this.emp2.ListComment = value;
  }
  public seeComment(t:Task){
    this.selectedTask2 = t;
    this.emp2.getCommentTask(t.id).subscribe(data=>{
      this.ListComment=data.body;
      console.log( 'first'+ this.ListComment);
      this.router.navigate(['/admin/listComment']);
    })
  }
  ngOnInit(): void {
    console.log('hnaa'+this.ListTask);
  }

}
