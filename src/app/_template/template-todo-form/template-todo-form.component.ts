import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/_interface/todo';
import { EventPing } from 'src/app/_interface/eventping';

@Component({
    selector: 'app-template-todo-form',
    templateUrl: './template-todo-form.component.html',
    styleUrls: ['./template-todo-form.component.scss'],
})
export class TemplateTodoFormComponent implements OnInit {
    public todo: Todo;
    @Output() ping: EventEmitter<Todo> = new EventEmitter();

    constructor() {
        this.reinitializeTodo();
    }

    ngOnInit() {}

    public createTodo(event?: any): void {
        this.ping.emit(this.todo);
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
