import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  get messages(): string[] {
    return this.messageService.messages;
  }
  constructor(private messageService: MessageService,
    private router: Router) { }
  ngOnInit() {
  }
  close(): void {
    // Close the popup.
    this.router.navigate([{ outlets: { popup: null } }]);
    this.messageService.isDisplayed = false;
  }
}