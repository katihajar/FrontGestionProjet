import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebarchef',
  templateUrl: './sidebar3.component.html',
})
export class SidebarChefComponent implements OnInit {
  collapseShow = 'hidden';
  constructor() {}

  ngOnInit() {}
  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }
}
