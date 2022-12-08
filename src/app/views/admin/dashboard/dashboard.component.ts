import { Component, OnInit } from '@angular/core';
import {EmployeService} from '../../../controller/service/employe.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  constructor(private emp:EmployeService) {}

  ngOnInit() {
    this.emp.getAllEmployeProject().subscribe(data=>{
      console.log(data);
    })
  }
}
