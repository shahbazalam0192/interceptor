import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { paths } from '../const';

@Component({
  selector: 'app-profiling',
  templateUrl: './profiling.component.html',
  styleUrls: ['./profiling.component.css'],
})
export class ProfilingComponent implements OnInit {
  response: any;

  constructor(private readonly http: HttpClient) {}

  succeed() {
    const url = 'https://jsonplaceholder.typicode.com/users/1';
    this.response = this.http.get(url);
  }

  fail() {
    this.response = this.http.get(paths.profiler);
  }

  ngOnInit(): void {}
}
