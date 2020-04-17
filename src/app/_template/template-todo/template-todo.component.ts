import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../_interface/todo';
import { EventPing } from 'src/app/_interface/eventping';

@Component({
    selector: 'app-template-todo',
    templateUrl: './template-todo.component.html',
    styleUrls: ['./template-todo.component.scss'],
})
export class TemplateTodoComponent implements OnInit {
    @Input() todo: Todo;
    @Output() ping: EventEmitter<EventPing> = new EventEmitter<EventPing>();

    constructor() {}

    ngOnInit() {}

    private changeCheck(event?: any): void {
        this.todo.done = !this.todo.done;
        this.ping.emit({
            label: 'check',
            object: this.todo,
        });
    }

    private changeText(event?: any): void {
        this.ping.emit({
            label: 'rename',
            object: this.todo,
        });
    }

    private deleteTodo(event?: any): void {
        this.ping.emit({
            label: 'delete',
            object: this.todo,
        });
    }
}
