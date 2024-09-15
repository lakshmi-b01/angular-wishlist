import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { application } from 'express';
import { json } from 'stream/consumers';
import { WishItem } from '../shared/models/wishItem';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) { }

  private getStandaradOptions() : any{
    return {
      headers : new HttpHeaders({
        'Content-type' : 'application/json',
      })
    };
  }

  getWishes(){
    let options = this.getStandaradOptions();

    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    });

    return this.http.get('assets/wishes.json', options);
  }

  private addWish(wish: WishItem){
    let options = this.getStandaradOptions();

    options.headers = options.headers.set('Authorization', 'value-needed-for-authorization')
    this.http.post('assets/wishes.json', wish, options);
  }
}
