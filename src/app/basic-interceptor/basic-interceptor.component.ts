import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-basic-interceptor',
  templateUrl: './basic-interceptor.component.html',
  styleUrls: ['./basic-interceptor.component.css'],
})
export class BasicInterceptorComponent implements OnInit {
  response: any;

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {}

  request() {
    const url = 'http://jsonplaceholder.typicode.com/todos/1';
    this.response = this.http.get(url);
  }
}
