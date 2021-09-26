import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { paths } from '../const';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {}

  run() {
    this.http.get(paths.error).subscribe();
  }
}
