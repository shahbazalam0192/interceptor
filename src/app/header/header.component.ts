import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { paths } from '../const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {}

  run() {
    this.http.get(paths.header).subscribe();
  }
}
