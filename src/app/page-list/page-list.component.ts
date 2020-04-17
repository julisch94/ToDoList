import { Component, OnInit } from '@angular/core';
import { Todo } from '../_interface/todo';
import { EventPing } from '../_interface/eventping';
import { DataService } from '../_service/data.service';
import { PartialObserver } from 'rxjs';

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

    constructor(private readonly dataService: DataService) {
        this.loadData();
    }

    ngOnInit() {}

    private loadData(): void {
        this.todos = [];
        this.todosDone = [];
        this.dataService.getTodos().subscribe(
            (todos: Todo[]) => {
                todos.forEach((todo: Todo) => {
                    if (todo.done) {
                        this.todosDone.push(todo);
                    } else {
                        this.todos.push(todo);
                    }
                });
            },
            error => {
                console.error('Failed to get data from server');
                console.error(error);
            }
        );
    }

    private create(todo: Todo): void {
        todo.position = this.todos.length;
        this.dataService.postTodo(todo).subscribe(
            (todo: Todo) => {
                console.log(`Todo ${todo.text} has been created.`);
                this.todos.push(todo);
            },
            error => {
                console.error('Failed to create data on server');
                console.error(error);
            }
        );
    }

    private update(event: EventPing): void {
        const todo = event.object;
        if ('check' == event.label) {
            this.checkTodo(todo);
        } else if ('delete' == event.label) {
            this.deleteTodo(todo);
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
