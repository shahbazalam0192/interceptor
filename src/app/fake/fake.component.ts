import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { paths } from '../const';

@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.css'],
})
export class FakeComponent implements OnInit {
  response: any;

  constructor(private readonly http: HttpClient) {}

  run() {
    this.response = this.http.get(paths.fake);
  }

  ngOnInit(): void {}
}
