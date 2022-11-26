import { Component } from '@angular/core';
import { UserService } from './AngularRoutingCourse/user/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularRouteCourse';
   constructor(private userservice: UserService) { }
  ngOnInit(): void {
  }
  get isLoggedIn(): boolean {
    return this.userservice.isLoggedIn;
  }
  get userName(): string {
    if (this.userservice.currentUser) {
      return this.userservice.currentUser.userName;
    }
    return '';
  }
  logOut(): void {
    this.userservice.logout();
    console.log('Log out');
  }
}
