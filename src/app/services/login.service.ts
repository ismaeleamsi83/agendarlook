import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
  ) { }


  loginUser(dataUser: any): Observable<any>{
    return this.http.post('http://192.168.1.44:3000/loginuser', dataUser)
  }

}
