import {Component, Input, OnInit} from '@angular/core';
import {ChefDeServiceService} from '../../../controller/service/chefDeService.service';
import {Router} from '@angular/router';
import {Project} from '../../../controller/model/project';
import {Task} from '../../../controller/model/task';
import {DirecteurService} from '../../../controller/service/directeur.service';
import {Services} from '../../../controller/model/services';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {

  showModal = false;
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== 'light' && color !== 'dark' ? 'light' : color;
  }
  private _color = 'light';


  constructor(private emp:DirecteurService,private router: Router) {}
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
  get selectedService(): Services {
    return this.emp.selectedService;
  }

  set selectedService(value: Services) {
    this.emp.selectedService = value;
  }
  Validate(){
    console.log(this.selectedProject);
    this.emp.ValidateProjectStatusDir().subscribe(
      data => {
        if (data != null) {
          // tslint:disable-next-line:no-shadowed-variable
          this.emp.getProjectByid(this.selectedService.id).subscribe(data=>{
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
      this.router.navigate(['/admin/projectTask']);
    })
  }
  ngOnInit() {
  }
}
