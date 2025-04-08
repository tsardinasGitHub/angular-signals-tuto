import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
/**
 * A special component to fix Angular template issues with curly braces
 * This is a more comprehensive solution for handling all template syntax issues
 */
@Component({
  selector: 'app-signal-basics',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './signal-basics.component.html',
  styleUrls: ['./signal-basics.component.scss']
})
export class SignalBasicsComponent {
  // Basic counter example
  counterValue = signal(0);
  
  // Use variables for all template examples to avoid interpolation issues
  templateExample = '{{ someSignal() }}';
  
  // The component code example as a plain string
  componentCode = `export class SignalBasicsComponent {
  // Create a writable signal with initial value 0
  counterValue = signal(0);
  
  incrementCounter() {
    // Update the signal based on its previous value
    this.counterValue.update(value => value + 1);
  }
  
  decrementCounter() {
    this.counterValue.update(value => value - 1);
  }
  
  resetCounter() {
    // Set the signal to a specific value
    this.counterValue.set(0);
  }
}`;
  
  // Methods to update the counter
  increment() {
    this.counterValue.update(value => value + 1);
  }
  
  decrement() {
    this.counterValue.update(value => value - 1);
  }
  
  reset() {
    this.counterValue.set(0);
  }
} 