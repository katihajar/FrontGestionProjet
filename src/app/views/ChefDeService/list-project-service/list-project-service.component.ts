import { Project } from "../../../controller/model/project";
import { Task } from "../../../controller/model/task";
import { Router } from "@angular/router";
import { ChefDeServiceService } from "src/app/controller/service/chefDeService.service";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-list-project-service",
  templateUrl: "./list-project-service.component.html",
  styleUrls: ["./list-project-service.component.css"],
})
export class ListProjectServiceComponent implements OnInit {
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  constructor(private emp: ChefDeServiceService, private router: Router) {}
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

  public seeTask(id: string) {
    this.emp.getTaskProject(id).subscribe((data) => {
      this.ListTask = data.body;
      console.log("first" + this.ListTask);
      this.router.navigate(["/chef/projectTask"]);
    });
  }
  ngOnInit() {
    this.emp.getAllChefDeProjetProject().subscribe((data) => {
      this.ListProject = data.body;
      console.log(data);
    });
  }
}
