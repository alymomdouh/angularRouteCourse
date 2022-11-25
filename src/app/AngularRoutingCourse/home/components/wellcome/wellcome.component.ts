import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/AngularRoutingCourse/user/service/user.service';
 
@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.css']
})
export class WellcomeComponent implements OnInit {
  public pageTitle = 'Welcome';
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