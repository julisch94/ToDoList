import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../_interface/todo';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    private serverUrl = 'http://localhost:3000';
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
    };

    constructor(private readonly httpClient: HttpClient) {}

    public getTodos(): Observable<Todo[]> {
        return this.httpClient.get<Todo[]>(`${this.serverUrl}/todos`, this.httpOptions);
    }

    public postTodo(todo: Todo): Observable<Todo> {
        return this.httpClient.post<Todo>(`${this.serverUrl}/todos`, todo, this.httpOptions);
    }

    public deleteTodo(todo: Todo): Observable<any> {
        return this.httpClient.delete<any>(`${this.serverUrl}/todos/${todo.id}`, this.httpOptions);
    }

    public putTodo(todo: Todo): Observable<Todo> {
        return this.httpClient.put<Todo>(`${this.serverUrl}/todos/${todo.id}`, todo, this.httpOptions);
    }
}
