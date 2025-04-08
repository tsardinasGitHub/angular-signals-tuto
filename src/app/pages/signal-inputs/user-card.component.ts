import { Component, input, model } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

export interface User {
  id: number;
  name: string;
  email: string;
  isPremium: boolean;
  memberSince: Date;
}

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  // Required inputs
  name = input.required<string>();
  email = input.required<string>();
  
  // Optional inputs with default values
  joinDate = input<Date>(new Date());
  isPremium = input<boolean>(false);
  status = input<string>('Active');
  
  // Two-way binding with model
  isFollowing = model<boolean>(false);
  
  // Method to toggle following status
  handleFollow() {
    this.isFollowing.update(following => !following);
  }
} 