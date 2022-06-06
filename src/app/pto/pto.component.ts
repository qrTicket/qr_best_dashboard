import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pto',
  templateUrl: './pto.component.html',
  styleUrls: ['./pto.component.scss']
})
export class PtoComponent implements OnInit {

    collapedSideBar: boolean;

    constructor() {}

    ngOnInit() {
        console.log("admin loaded");
    }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
