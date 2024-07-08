import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  url: string = environment.apiUrl + '/users';


  constructor(
    private http: HttpClient
  ) { }


  getUserInfo() {
    let lsData: string | null = localStorage.getItem('barcontrol');
    let jsonData;
    if(lsData != null){
      
      jsonData = JSON.parse(lsData);

      console.log(jsonData.token);
      
    }

    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jsonData.token}`
    });


    return this.http.get( this.url+'/me', { headers: headers });
  }


}
