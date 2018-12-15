import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

/*
  Generated class for the GmapProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GmapProvider {

  app: any;
  google_api_key: any;

  contentHeader: Headers = new Headers({'Content-Type': 'application/json'});

  constructor(public http: HttpClient) {
    this.google_api_key = '--You\'re_google_api_key_goes_here';
  }

  getAddress(params) {
    let url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + params.lat + ',' + params.long;
    return this.GET(url);
  }

  getStreetAddress(params) {
    let url = 'https://maps.googleapis.com/maps/api/geocode/json?key=' + this.google_api_key + '&latlng=' + params.lat + ',' + params.long + '&result_type=street_address';
    return this.GET(url);
  }

  GET(url) {
    console.log(this.http.get(url));
    return this.http.get(url);
  }

}
