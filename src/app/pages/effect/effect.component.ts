import { Component, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-effect',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container">
      <h1>Signal Effects</h1>
      <p>Effects run side effects when signals change</p>
      
      <div class="demo-section">
        <h2>Document Title Effect</h2>
        <p>
          Current count: <strong>{{ count() }}</strong>
        </p>
        <p>
          <small>The browser tab title updates with this value</small>
        </p>
        <div class="button-group">
          <button (click)="increment()">Increment</button>
          <button (click)="reset()">Reset</button>
        </div>
      </div>
      
      <div class="navigation">
        <a routerLink="/computed-signals">← Back to Computed Signals</a>
        <a routerLink="/signal-inputs">Next: Signal Inputs →</a>
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
    
    .button-group {
      display: flex;
      gap: 10px;
      margin-top: 10px;
    }
    
    button {
      padding: 8px 16px;
      background: #3f51b5;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    
    button:hover {
      background: #303f9f;
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
export class EffectComponent {
  count = signal(0);
  
  constructor() {
    effect(() => {
      document.title = `Count: ${this.count()}`;
    });
  }
  
  increment() {
    this.count.update(value => value + 1);
  }
  
  reset() {
    this.count.set(0);
  }
} 