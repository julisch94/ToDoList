import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/_interface/todo';

@Component({
    selector: 'app-template-todo-form',
    templateUrl: './template-todo-form.component.html',
    styleUrls: ['./template-todo-form.component.scss'],
})
export class TemplateTodoFormComponent implements OnInit {
    public todo: Todo;

    constructor() {
        this.reinitializeTodo();
    }

    ngOnInit() {}

    public createTodo(event?: any): void {
        console.log(`Create todo ${this.todo.text}`);
        console.log(this.todo);
        // if result is OK
        this.reinitializeTodo();
    }

    private reinitializeTodo(): void {
        this.todo = {
            id: undefined,
            position: undefined,
            text: undefined,
            done: false,
        };
    }
}
