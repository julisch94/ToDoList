import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../_interface/todo';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    private serverUrl = 'http://localhost:3000';

    constructor(private readonly httpClient: HttpClient) {}

    public getTodos(): Observable<Todo[]> {
        return this.httpClient.get<Todo[]>(`${this.serverUrl}/todos`, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        });
    }
}
