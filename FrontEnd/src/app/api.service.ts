import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private  http: HttpClient) { }

  register(user) {

    return this.http.post('http://localhost:3000/Login', user)

  }


  getVersion(){

    return this.http.get('http://localhost:3000/getVersion')


  }





}
