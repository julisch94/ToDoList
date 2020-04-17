import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../_interface/todo';
import { EventPing } from 'src/app/_interface/eventping';
import { DataService } from 'src/app/_service/data.service';

@Component({
    selector: 'app-template-todo',
    templateUrl: './template-todo.component.html',
    styleUrls: ['./template-todo.component.scss'],
})
export class TemplateTodoComponent implements OnInit {
    @Input() todo: Todo;
    @Output() ping: EventEmitter<EventPing> = new EventEmitter<EventPing>();

    constructor(private readonly dataService: DataService) {}

    ngOnInit() {}

    private changeCheck(event?: any): void {
        this.todo.done = !this.todo.done;
        this.dataService.putTodo(this.todo).subscribe(
            (todo: Todo) => {
                console.log(`Todo ${todo.text} has been checked.`);
                this.ping.emit({
                    label: 'check',
                    object: this.todo,
                });
            },
            error => {
                console.error('Failed to change done of todo');
                console.error(error);
            }
        );
    }

    private changeText(event?: any): void {
        this.dataService.putTodo(this.todo).subscribe(
            (todo: Todo) => {
                console.log(`Todo ${todo.text} has been renamed.`);
                this.ping.emit({
                    label: 'rename',
                    object: this.todo,
                });
            },
            error => {
                console.error('Failed to rename todo');
                console.error(error);
            }
        );
    }

    private deleteTodo(event?: any): void {
        this.dataService.deleteTodo(this.todo).subscribe(
            (todo: Todo) => {
                console.log(`Todo ${todo.text} has been deleted.`);
                this.ping.emit({
                    label: 'delete',
                    object: this.todo,
                });
            },
            error => {
                console.error('Failed to delete todo');
                console.error(error);
            }
        );
    }
}
