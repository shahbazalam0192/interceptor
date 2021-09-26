import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnInit {
  constructor(
    private readonly http: HttpClient,
    public readonly loaderService: LoaderService
  ) {}

  response: any;

  ngOnInit(): void {}

  run() {
    const url = 'https://jsonplaceholder.typicode.com/albums/1';
    this.http.get(url).subscribe((r) => (this.response = r));
  }
}
