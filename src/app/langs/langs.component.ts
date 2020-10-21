import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-langs',
  templateUrl: './langs.component.html',
  styleUrls: ['./langs.component.css']
})
export class LangsComponent implements OnInit {

  constructor(
    public dataServices: DataService
  ) { }

  ngOnInit(): void {
  }

  changeLang(lang: string): boolean{
    this.dataServices.data.lang = lang;
    this.dataServices.data.langIndex = this.dataServices.data.langs.indexOf( lang );

    this.dataServices.replaceQueryParams('', window.location.search.replace(/lang=../, 'lang=' + lang));
    return false;
  }

}
