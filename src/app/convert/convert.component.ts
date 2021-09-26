import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css'],
})
export class ConvertComponent implements OnInit {
  requestObj = {
    Title: 'Mr',
    Name: 'Cool Cat',
    Id: 1,
  };
  response: any;

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {}

  run() {
    const url = 'https://jsonplaceholder.typicode.com/comments/1';
    this.response = this.http.put(url, this.requestObj);
  }
}
