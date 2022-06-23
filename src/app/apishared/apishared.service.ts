import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApisharedService {

  constructor(private httpclient:HttpClient) { }
  getInfromation(){
    let url='https://reqres.in/api/unknown/khlk';
    return this.httpclient.get(url)
  }
}
