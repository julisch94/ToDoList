import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-page-list',
    templateUrl: './page-list.component.html',
    styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {

    public showOpen = true;
    public showDone = true;

    constructor() {
    }

    ngOnInit() {
    }

}
