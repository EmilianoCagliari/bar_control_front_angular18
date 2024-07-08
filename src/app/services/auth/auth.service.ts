import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = environment.apiUrl + '/auth';

  constructor(
    private http: HttpClient
  ) { }



  login( email: string, password: string ) {

    return this.http.post(this.url+'/login', { email, password });
  }



  test() {
    const url: string = environment.apiUrl + '/test';
    return this.http.get(url, { responseType: 'text' });
  }


}
