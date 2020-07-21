import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  goToContact(){
    this.router.navigate(['contact']);

  }

}
