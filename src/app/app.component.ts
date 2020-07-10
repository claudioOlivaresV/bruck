import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bruk';
  showSpinner = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showSpinner = false;
    }, 2000);
  }
}

