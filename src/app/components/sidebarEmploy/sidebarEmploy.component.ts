import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebaremploy',
  templateUrl: './sidebar2.component.html',
})
export class SidebarEmployComponent implements OnInit {
  collapseShow = 'hidden';
  constructor() {}

  ngOnInit() {}
  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }
}
