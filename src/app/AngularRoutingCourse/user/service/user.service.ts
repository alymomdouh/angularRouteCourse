import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../../messages/service/message.service';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser?: User | undefined;
  redirectUrl = '';

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  constructor(private messageService: MessageService,
    private router: Router) { }

  login(userName: string, password: string): void {
    if (!userName || !password) {
      this.messageService.addMessage('Please enter your userName and password');
      return;
    }
    if (userName === 'admin') {
      this.currentUser = {
        id: 1,
        userName,
        isAdmin: true
      };
      this.messageService.addMessage('Admin login');
      return;
    }
    this.currentUser = {
      id: 2,
      userName,
      isAdmin: false
    };
    this.messageService.addMessage(`User: ${this.currentUser.userName} logged in`);
  }
  logout(): void {
    this.currentUser = undefined;
    this.router.navigate(['/index']);
    // this.router.navigateByUrl('/index');
  }
}