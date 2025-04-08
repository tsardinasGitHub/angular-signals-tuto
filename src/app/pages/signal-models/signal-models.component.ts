import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { signal } from '@angular/core';

@Component({
  selector: 'app-signal-models',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="container">
      <h1>Signal Models</h1>
      <p>Using signals to manage and update complex models</p>
      
      <div class="demo-section">
        <h2>User Profile Example</h2>
        
        <div class="form-group">
          <label for="name">Name:</label>
          <input 
            id="name" 
            type="text" 
            [(ngModel)]="name" 
            (blur)="updateProfile()"
          />
        </div>
        
        <div class="form-group">
          <label for="email">Email:</label>
          <input 
            id="email" 
            type="email" 
            [(ngModel)]="email" 
            (blur)="updateProfile()"
          />
        </div>
        
        <div class="form-group">
          <label>
            <input 
              type="checkbox" 
              [(ngModel)]="isActive" 
              (change)="updateProfile()"
            />
            Active
          </label>
        </div>
        
        <div class="card">
          <h3>User Profile</h3>
          <pre>{{ userProfile() | json }}</pre>
        </div>
      </div>
      
      <div class="navigation">
        <a routerLink="/signal-inputs">← Back to Signal Inputs</a>
      </div>
    </div>
  `,
  styles: [
    `.container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    
    h1 {
      color: #3f51b5;
    }
    
    .demo-section {
      margin: 20px 0;
      padding: 20px;
      background: #f5f5f5;
      border-radius: 8px;
    }
    
    .form-group {
      margin-bottom: 15px;
    }
    
    label {
      display: block;
      margin-bottom: 5px;
      font-weight: 500;
    }
    
    input[type="text"],
    input[type="email"] {
      width: 100%;
      max-width: 300px;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    
    .card {
      background: white;
      border-radius: 4px;
      padding: 15px;
      margin-top: 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    pre {
      background: #f8f9fa;
      padding: 10px;
      border-radius: 4px;
      overflow: auto;
    }
    
    .navigation {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
    }
    
    a {
      color: #3f51b5;
      text-decoration: none;
    }
    
    a:hover {
      text-decoration: underline;
    }`
  ]
})
export class SignalModelsComponent {
  // Form fields
  name = 'John Doe';
  email = 'john@example.com';
  isActive = true;
  
  // Signal for user profile
  userProfile = signal({
    name: this.name,
    email: this.email,
    active: this.isActive,
    lastUpdated: new Date()
  });
  
  updateProfile() {
    this.userProfile.update(profile => ({
      ...profile,
      name: this.name,
      email: this.email,
      active: this.isActive,
      lastUpdated: new Date()
    }));
  }
} 