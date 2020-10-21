import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import config from '../../assets/config.json';

interface Config {
  domain: object;
  license: object;
  langs: object;
}

interface Data {
  lang: string;
  langs: Array<any>;
  langIndex: number;
  offer: Array<any>;
  steps: Array<any>;
  cta: Array<any>;
  bcode?: string;
  target?: boolean;
  menuTrue: boolean;
  config: Config;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  data: Data = {
    lang: 'en',
    langs: ['en'],
    langIndex: 0,
    offer: [
      ['WELCOME BONUS'],
      ['Steam to a winning'],
      ['start with 100% up to €600'],
      ['+50 free spins']
    ],
    steps: [
      ['Join Today'], ['Deposit Now'], ['Spin to win']
    ],
    cta: ['Sign up'],
    menuTrue: false,
    config
  };

  constructor(
    public activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  getQueryParams = () => {
    this.activatedRoute.queryParams.subscribe(params => {

      if (params.cta){

        for (const val of Object.keys(params)) {
          if ( /ln\d/g.test(val) ){
            if (val === 'ln1'){ this.data.offer = []; }
            this.data.offer.push( format(params[val]) );

          } else if ( /stp\d/g.test(val) ) {
            if (val === 'stp1'){ this.data.steps = []; }
            this.data.steps.push( format(params[val]) );

          } else {
            this.data[val] = format(params[val]);
          }
        }

        function format(obj: string): string[] | string{
          const result: any = obj.replace(/_/g, ' ').split('*');
          // result = /\*/g.test(obj) ? result.split('*') : result;
          return result;
        }

        this.data.lang = params.lang ? params.lang : this.data.langs[0];
        this.data.langIndex = this.data.langs.indexOf( this.data.lang );

      }
      console.log(this.data);
    });
  }

  replaceQueryParams(path: string, query: string): void{
    this.location.replaceState( path, query );
  }

  launchSite(): boolean{
    const target = this.data.target ? ( '_' + this.data.target ) : '_blank';

    let url = this.data.config.domain[ this.data.lang ];
    url += '/' + this.data.lang;
    url += '/' + 'signup';
    url += this.data.bcode ? ( '/?bonuscode=' + this.data.bcode ) : '';

    // remove double slash from url
    url = url.replace(/([^:]\/)\/+/g, '$1');

    // console.log( url, target );
    window.open( url, target );

    return false;
  }
}
