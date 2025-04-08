import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-computed-signals',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './computed-signals.component.html',
  styleUrls: ['./computed-signals.component.scss']
})
export class ComputedSignalsComponent {
  // Base signals
  quantity = signal(1);
  pricePerUnit = signal(29.99);
  taxRate = signal(7);
  
  // Computed signals
  subtotal = computed(() => {
    return this.quantity() * this.pricePerUnit();
  });
  
  taxAmount = computed(() => {
    return this.subtotal() * (this.taxRate() / 100);
  });
  
  total = computed(() => {
    return this.subtotal() + this.taxAmount();
  });
  
  // Input handlers
  updateQuantity(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = parseInt(input.value, 10);
    if (!isNaN(value) && value > 0) {
      this.quantity.set(value);
    }
  }
  
  updatePrice(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = parseFloat(input.value);
    if (!isNaN(value) && value > 0) {
      this.pricePerUnit.set(value);
    }
  }
  
  updateTaxRate(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = parseFloat(input.value);
    if (!isNaN(value) && value >= 0) {
      this.taxRate.set(value);
    }
  }
}