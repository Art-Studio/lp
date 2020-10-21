import { Component, OnInit } from '@angular/core';

import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'lp';

  constructor(
    public dataServices: DataService
  ){}

  ngOnInit(): void {
    this.dataServices.getQueryParams();
  }

  menuToggle(): boolean{
    this.dataServices.data.menuTrue = !this.dataServices.data.menuTrue;
    return false;
  }

  onResize(width: number): void {
    // set breakPoint console.log(width);
  }
}
