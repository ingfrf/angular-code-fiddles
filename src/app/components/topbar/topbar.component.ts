import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    // TODO mejor con AuthGuard que chequeando un elemento común que se recargue cada vez que se cambia la ruta
    if (this.userService.user == undefined) {
      const user = localStorage.getItem('user');
      if (user != null) {
        this.userService.user = JSON.parse(user);
      } else {
        this.router.navigate(['/login']);
      }
    }
  }

  public getUser() {
    return this.userService.user;
  }

  logout() {
    this.userService.user = undefined;
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
