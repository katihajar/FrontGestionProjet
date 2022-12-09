import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../../controller/model/task';
import {EmployeService} from '../../../controller/service/employe.service';
import {Project} from '../../../controller/model/project';
import {Comment} from '../../../controller/model/comment';
import {AuthentificationService} from '../../../controller/service/authentification.service';
import {User} from '../../../controller/model/user';

@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.css']
})
export class ListCommentComponent implements OnInit {

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
  constructor(private emp:EmployeService, private auth: AuthentificationService) {}
  get User(): User {
    return this.auth.User;
  }

  set User(value: User) {
    this.auth.User = value;
  }
  toggleModal(){
    this.showModal = !this.showModal;
  }
  get selectedComment(): Comment {
    return this.emp.selectedComment;
  }

  set selectedComment(value: Comment) {
    this.emp.selectedComment = value;
  }
  get ListComment(): Array<Comment> {
    return this.emp.ListComment;
  }

  set ListComment(value: Array<Comment>) {
    this.emp.ListComment = value;
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
  addComment(){
    this.selectedComment.task = this.selectedTask;
    this.selectedComment.user = this.User;
    console.log(this.selectedComment);
    this.emp.saveComment().subscribe(
      data => {
        if (data != null) {
          this.selectedComment = new Comment();
          // tslint:disable-next-line:no-shadowed-variable
          this.emp.getTaskProject(this.selectedProject.id).subscribe(data=>{
            this.ListUserTask=data.body;
            console.log( 'first'+ this.ListUserTask);
            // tslint:disable-next-line:no-shadowed-variable
            this.emp.getCommentTask(this.selectedTask.id).subscribe(data=>{
              this.ListComment=data.body;
              this.toggleModal();
            })
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
