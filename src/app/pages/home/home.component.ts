import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="home-container">
      <div class="hero-section">
        <h1>Learn Angular Signals</h1>
        <p class="lead">Discover the new reactive programming model in Angular</p>
      </div>
      
      <div class="features-grid">
        <div class="feature-card">
          <h2>Signal Basics</h2>
          <p>Learn how to create, read, and update signals in Angular</p>
          <a routerLink="/signal-basics" class="learn-more">Learn More →</a>
        </div>
        
        <div class="feature-card">
          <h2>Computed Signals</h2>
          <p>Create derived state using computed signals</p>
          <a routerLink="/computed-signals" class="learn-more">Learn More →</a>
        </div>
        
        <div class="feature-card">
          <h2>Effects</h2>
          <p>Respond to signal changes with side effects</p>
          <a routerLink="/effect" class="learn-more">Learn More →</a>
        </div>
        
        <div class="feature-card">
          <h2>Signal Inputs</h2>
          <p>Use signals for component inputs and two-way binding</p>
          <a routerLink="/signal-inputs" class="learn-more">Learn More →</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      max-width: 1000px;
      margin: 0 auto;
    }
    
    .hero-section {
      text-align: center;
      padding: 40px 20px;
      margin-bottom: 40px;
    }
    
    .hero-section h1 {
      font-size: 2.5rem;
      color: #3f51b5;
      margin-bottom: 16px;
    }
    
    .lead {
      font-size: 1.25rem;
      color: #666;
    }
    
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 24px;
    }
    
    .feature-card {
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      padding: 24px;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    
    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
    
    .feature-card h2 {
      color: #3f51b5;
      margin-top: 0;
      margin-bottom: 16px;
    }
    
    .feature-card p {
      color: #666;
      margin-bottom: 20px;
    }
    
    .learn-more {
      display: inline-block;
      color: #3f51b5;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s;
    }
    
    .learn-more:hover {
      color: #ff4081;
    }
  `]
})
export class HomeComponent {} 