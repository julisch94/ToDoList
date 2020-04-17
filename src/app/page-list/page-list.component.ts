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
                position: 0,
                text: 'hello',
                done: false,
            },
            {
                id: 1,
                position: 1,
                text: 'hello world',
                done: false,
            },
        ];
        this.todosDone = [];
    }

    ngOnInit() {}

    private create(todo: Todo): void {
        todo.position = this.todos.length;
        this.todos.push(todo);
        console.log(`Todo ${todo.text} has been created.`);
    }

    private update(event: EventPing): void {
        const todo = event.object;
        if ('check' == event.label) {
            this.checkTodo(todo);
            console.log(`Todo ${todo.text} has been checked.`, 'color: green;');
        } else if ('rename' == event.label) {
            console.log(`Todo ${todo.text} has been renamed.`);
        } else if ('delete' == event.label) {
            this.deleteTodo(todo);
            console.log(`Todo ${todo.text} has been deleted.`);
        } else {
            console.error('Unkown event emitted!');
        }
    }

    private checkTodo(todo: Todo): void {
        if (todo.done) {
            this.todos.splice(this.todos.indexOf(todo), 1);
            this.todosDone.push(todo);
        } else {
            this.todosDone.splice(this.todosDone.indexOf(todo), 1);
            this.todos.push(todo);
        }
    }

    private deleteTodo(todo: Todo): void {
        if (todo.done) {
            this.todosDone.splice(this.todosDone.indexOf(todo), 1);
        } else {
            this.todos.splice(this.todos.indexOf(todo), 1);
        }
    }
}
