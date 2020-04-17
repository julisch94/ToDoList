import { Component, OnInit } from '@angular/core';
import { Todo } from '../../_interface/todo';

@Component({
    selector: 'app-template-todo',
    templateUrl: './template-todo.component.html',
    styleUrls: ['./template-todo.component.scss'],
})
export class TemplateTodoComponent implements OnInit {
    private todo: Todo;

    constructor() {
        this.todo = {
            id: 1,
            text: 'Buy groceries',
            done: false,
            position: 0,
        };
    }

    ngOnInit() {}

    private changeCheck(event?: any): void {
        this.todo.done = !this.todo.done;
        console.log(`Todo ${this.todo.text} was changed to ${this.todo.done}`);
    }

    private changeText(event?: any): void {
        console.log(`Todo ${this.todo.text} will be sent to server.`);
    }

    private deleteTodo(event?: any): void {
        console.log(`Todo ${this.todo.text} will be deleted.`);
    }
}
