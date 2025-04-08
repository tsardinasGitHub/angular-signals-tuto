import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `  
    <header class="navbar">
      <div class="logo">
        <h1>{{title()}}</h1>
      </div>
      <nav>
        <ul class="nav-links">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
          <li><a routerLink="/signal-basics" routerLinkActive="active">Signal Basics</a></li>
          <li><a routerLink="/computed-signals" routerLinkActive="active">Computed Signals</a></li>
          <li><a routerLink="/effect" routerLinkActive="active">Effects</a></li>
          <li><a routerLink="/signal-inputs" routerLinkActive="active">Signal Inputs</a></li>
          <li><a routerLink="/signal-models" routerLinkActive="active">Signal Models</a></li>
          <li><a routerLink="/css-learning" routerLinkActive="active">CSS Learning</a></li>
        </ul>
      </nav>
    </header>
    
    <main class="content">
      <router-outlet></router-outlet>
    </main>
    
    <footer>
      <p>Angular Signals Tutorial - Learning Project</p>
    </footer>
  `,
  styles: [
    `:host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    
    .navbar {
      background-color: #3f51b5;
      color: white;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    
    .logo h1 {
      margin: 0;
      font-size: 1.5rem;
    }
    
    .nav-links {
      display: flex;
      list-style: none;
      gap: 1.5rem;
      margin: 0;
      padding: 0;
      flex-wrap: wrap;
    }
    
    .nav-links a {
      color: white;
      text-decoration: none;
      font-weight: 500;
      padding: 0.5rem 0;
      position: relative;
      transition: color 0.3s;
    }
    
    .nav-links a:hover, .nav-links a.active {
      color: #ff4081;
    }
    
    .nav-links a.active::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #ff4081;
    }
    
    .content {
      flex: 1;
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
    }
    
    footer {
      background-color: #f5f5f5;
      text-align: center;
      padding: 1rem;
      margin-top: auto;
      color: #666;
    }`
  ]
})
export class AppComponent {
  title = signal('Angular Signals Tutorial');
} 