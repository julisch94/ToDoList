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
        this.reinitializeTodo();
    }

    private reinitializeTodo(): void {
        this.todo = {
            done: false,
        };
    }
}
