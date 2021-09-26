import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cache',
  templateUrl: './cache.component.html',
  styleUrls: ['./cache.component.css'],
})
export class CacheComponent implements OnInit {
  response: any;
  constructor(private readonly http: HttpClient) {}

  run() {
    const url = 'https://jsonplaceholder.typicode.com/todos/2';
    this.response = this.http.get(url);
  }

  clear() {
    this.response = null;
  }

  ngOnInit(): void {}
}
