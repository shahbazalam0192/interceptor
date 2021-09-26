import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css'],
})
export class NotifyComponent implements OnInit {
  response: any;

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {}

  run() {
    const body = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    const url = 'https://jsonplaceholder.typicode.com/posts';
    this.response = this.http.post(url, body);
  }
}
