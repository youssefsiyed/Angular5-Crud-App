import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  loading: boolean = false;
  constructor() {
    this.loading = false;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.loading = true;
    }, 1000);
  }
}
