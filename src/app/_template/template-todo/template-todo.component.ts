import { Component, OnInit } from '@angular/core';
import { Todo } from '../../_interface/todo';

@Component({
    selector: 'app-template-todo',
    templateUrl: './template-todo.component.html',
    styleUrls: ['./template-todo.component.scss'],
})
export class TemplateTodoComponent implements OnInit {
    public todo: Todo;

    constructor() {
        this.todo = {
            id: 1,
            text: 'Buy groceries',
            done: false,
            position: 0,
        };
    }

    ngOnInit() {}

    public changeCheck(event?: any): void {
        this.todo.done = !this.todo.done;
        console.log(`Todo at position ${this.todo.position} was changed to ${this.todo.done}`);
    }
}
