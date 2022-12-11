import {Component, Input, OnInit} from '@angular/core';
import {ChefDeServiceService} from '../../../controller/service/chefDeService.service';
import {Router} from '@angular/router';
import {Project} from '../../../controller/model/project';
import {Task} from '../../../controller/model/task';
import {DirecteurService} from '../../../controller/service/directeur.service';
import {Services} from '../../../controller/model/services';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {

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
  get Service(): Services {
    return this.emp.Service;
  }

  set Service(value: Services) {
    this.emp.Service = value;
  }
  get ListService(): Array<Services> {
    return this.emp.ListService;
  }
  set ListService(value: Array<Services>) {
    this.emp.ListService = value;
  }
  get selectedProject(): Project {
    return this.emp.selectedProject;
  }

  set selectedProject(value: Project) {
    this.emp.selectedProject = value;
  }
  get selectedService(): Services {
    return this.emp.selectedService;
  }

  set selectedService(value: Services) {
    this.emp.selectedService = value;
  }
  get ListTask(): Array<Task> {
    return this.emp.ListTask;
  }

  set ListTask(value: Array<Task>) {
    this.emp.ListTask = value;
  }
  get ListProject(): Array<Project> {
    return this.emp.ListProject;
  }
  set ListProject(value: Array<Project>) {
    this.emp.ListProject = value;
  }
  toggle(p: Project){
    this.selectedProject = p;
    this.showModal = !this.showModal;
  }
  public seeProject(s:Services){
    this.selectedService = s;
    this.emp.getProjectByid(s.id).subscribe(data=>{
      this.ListProject=data.body;
      console.log( 'first'+ this.ListProject);
      this.router.navigate(['/admin/serviceProject']);
    })
  }
  Save(){
    console.log(this.Service);
    this.emp.saveService().subscribe(
      data => {
        if (data != null) {
          // tslint:disable-next-line:no-shadowed-variable
          this.emp.getService().subscribe(data=>{
            this.ListService=data.body;
            console.log(data);
            this.showModal = !this.showModal;
            this.Service = new Services();
            console.log(data);
          })

        }
      })
  }
  ngOnInit() {
    this.emp.getService().subscribe(data=>{
      this.ListService=data.body;
      console.log(data);
    })
  }

}
