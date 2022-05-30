import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000/user';
  user: any;

  constructor(private http: HttpClient) {
  }

  public createAccount(user: any) {
    return this.http.post(this.url, user)
  }

  public login(user: any) {
    return this.http.post(`${this.url}/login`, user)
  }
}
