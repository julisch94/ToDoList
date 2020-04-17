import { Component, OnInit } from '@angular/core';
import { Todo } from '../_interface/todo';
import { EventPing } from '../_interface/eventping';

@Component({
    selector: 'app-page-list',
    templateUrl: './page-list.component.html',
    styleUrls: ['./page-list.component.scss'],
})
export class PageListComponent implements OnInit {
    private showOpen = true;
    private showDone = true;

    private todos: Todo[];
    private todosDone: Todo[];

    constructor() {
        this.todos = [
            {
                id: 0,
                position: 1,
                text: 'hello',
                done: false,
            },
            {
                id: 1,
                position: 2,
                text: 'hello world',
                done: false,
            },
        ];
        this.todosDone = [];
    }

    ngOnInit() {}

    public update(event: EventPing): void {
        if ('check' == event.label) {
            console.log('Todo was checked', 'color: green;');
            const todo = event.object;
            if (todo.done) {
                this.todos.splice(this.todos.indexOf(todo), 1);
                this.todosDone.push(todo);
            } else {
                this.todosDone.splice(this.todosDone.indexOf(todo), 1);
                this.todos.push(todo);
            }
        }
    }
}
