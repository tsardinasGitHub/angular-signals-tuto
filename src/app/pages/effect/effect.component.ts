import { Component, signal, effect, computed, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-effect',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './effect.component.html',
  styleUrls: ['./effect.component.scss']
})
export class EffectComponent implements OnDestroy {
  // Signals
  count = signal(0);
  titlePrefix = signal('Count:');
  
  // Computed value that combines the prefix and count
  fullTitle = computed(() => `${this.titlePrefix()} ${this.count()}`);
  
  // Effect for updating document title
  private titleEffect = effect(() => {
    // This runs when component initializes and when any of the signals read inside are changed
    document.title = this.fullTitle();
  });
  
  // Methods to update count
  increment() {
    this.count.update(value => value + 1);
  }
  
  decrement() {
    this.count.update(value => Math.max(0, value - 1));
  }
  
  reset() {
    this.count.set(0);
  }
  
  // Method to update title prefix
  updateTitlePrefix(newPrefix: string) {
    this.titlePrefix.set(newPrefix);
  }
  
  // Clean up the effect when component is destroyed
  ngOnDestroy() {
    this.titleEffect.destroy();
  }
} 