import { Component, signal, computed, input, model, InputSignal, ModelSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserCardComponent } from './user-card.component';

// Child component demo removed (now imported from separate file)

interface UserProfile {
  name: string;
  role: string;
  verified: boolean;
  followers: number;
}

@Component({
  selector: 'app-signal-inputs',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, UserCardComponent],
  templateUrl: './signal-inputs.component.html',
  styleUrls: ['./signal-inputs.component.scss']
})
export class SignalInputsComponent {
  // User card demo state
  userName = signal('Sarah Johnson');
  userEmail = signal('sarah.j@example.com');
  userJoinDate = signal(new Date(2023, 1, 15)); // Feb 15, 2023
  userIsPremium = signal(true);
  userStatus = signal('Active');
  userIsFollowing = signal(false);
  
  // Format date for input field
  formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }
  
  // Update date from input field
  updateDate(dateString: string) {
    this.userJoinDate.set(new Date(dateString));
  }

  // Demo example using input() signal
  userRole = signal('Member');
  userVerified = signal(false);
  userFollowers = signal(0);
  
  // Computed value based on inputs
  userStatusComputed = computed(() => {
    if (this.userVerified()) {
      return `Verified ${this.userRole()}`;
    }
    return this.userRole();
  });
  
  // User selection follow status
  isFollowingDemo = signal(false);
  
  // Toggle following status
  toggleFollow() {
    this.isFollowingDemo.update(following => !following);
    
    // Update the follow count based on the follow status
    if (this.isFollowingDemo()) {
      this.userFollowers.update(count => count + 1);
    } else {
      this.userFollowers.update(count => Math.max(0, count - 1));
    }
    
    // Also update the card's following status to match the demo state
    this.userIsFollowing.set(this.isFollowingDemo());
  }
  
  // Available roles for selection
  availableRoles = ['Member', 'Author', 'Editor', 'Admin'];
  
  // Example code snippets for display in the component
  requiredInputExample = `import { Component, input } from '@angular/core';

@Component({
  /* ... */
})
export class UserCardComponent {
  // Required input signal
  userName = input.required<string>();
}`;

  optionalInputExample = `import { Component, input } from '@angular/core';

@Component({
  /* ... */
})
export class UserCardComponent {
  // Optional input with default value
  role = input<string>('Member');
  verified = input<boolean>(false);
}`;
  
  transformInputExample = `import { Component, input } from '@angular/core';

@Component({
  /* ... */
})
export class PriceDisplayComponent {
  // Input with transform function
  price = input(0, {
    transform: (value: number) => Math.max(0, value)
  });
  
  // Input that formats a value as currency
  formattedPrice = input(0, {
    transform: (value: number) => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(value);
    }
  });
}`;

  modelExample = `import { Component, model } from '@angular/core';

@Component({
  /* ... */
})
export class ToggleComponent {
  // Two-way bindable model signal
  checked = model<boolean>(false);
  
  toggle() {
    this.checked.update(value => !value);
  }
}

// In parent template:
// <app-toggle [(checked)]="parentCheckedValue"></app-toggle>`;

  traditionalInputExample = `// Traditional @Input()
@Input() userName: string;
@Input() role: string = 'Member';
@Input() verified: boolean = false;`;

  signalInputExample = `// Signal inputs
userName = input.required<string>();
role = input<string>('Member');
verified = input<boolean>(false);`;

  twoWayBindingOldExample = `// Old way
@Input() checked: boolean;
@Output() checkedChange = new EventEmitter<boolean>();`;

  twoWayBindingModelExample = `// New way with model()
checked = model<boolean>(false);`;
} 