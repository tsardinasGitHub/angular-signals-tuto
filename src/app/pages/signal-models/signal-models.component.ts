import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { signal, computed } from '@angular/core';

interface UserProfile {
  name: string;
  email: string;
  active: boolean;
  lastUpdated: Date;
  preferences?: UserPreferences;
}

interface UserPreferences {
  theme: string;
  notifications: boolean;
  language: string;
}

@Component({
  selector: 'app-signal-models',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './signal-models.component.html',
  styleUrls: ['./signal-models.component.scss']
})
export class SignalModelsComponent {
  // Template code examples
  basicSignalExample = `// Create a signal with a complex object
const userProfile = signal({
  name: 'John Doe',
  email: 'john@example.com',
  active: true,
  lastUpdated: new Date()
});

// Read a property from the object
console.log(userProfile().name); // "John Doe"`;

  dontDoExample = `// DON'T mutate signal value directly - won't trigger updates!
userProfile().name = 'Jane Doe';  
userProfile().active = false;`;

  doDoExample = `// DO create new objects when updating
userProfile.update(profile => ({
  ...profile,           // Copy all existing properties
  name: 'Jane Doe',     // Override specific properties
  active: false,
  lastUpdated: new Date()
}));`;

  nestedUpdateExample = `// Update nested object properties
userProfile.update(profile => ({
  ...profile,
  preferences: {
    ...profile.preferences,  // Preserve other preference properties
    theme: 'dark'            // Update specific nested property
  },
  lastUpdated: new Date()
}));`;

  modelClassExample = `export class UserProfileModel {
  // Private signals for internal state
  private _data = signal<UserProfile>({
    name: '',
    email: '',
    active: false,
    lastUpdated: new Date()
  });
  
  // Public readable signals
  readonly profile = this._data.asReadonly();
  
  // Computed properties
  readonly displayName = computed(() => {
    const profile = this._data();
    return profile.name || 'Anonymous User';
  });
  
  readonly isActive = computed(() => this._data().active);
  
  // Methods for updating the model
  updateName(name: string) {
    this._data.update(profile => ({
      ...profile,
      name,
      lastUpdated: new Date()
    }));
  }
  
  setActiveStatus(active: boolean) {
    this._data.update(profile => ({
      ...profile,
      active,
      lastUpdated: new Date()
    }));
  }
  
  // Method for bulk updates
  updateProfile(updates: Partial<UserProfile>) {
    this._data.update(profile => ({
      ...profile,
      ...updates,
      lastUpdated: new Date()
    }));
  }
}`;
  
  // Form fields for user profile
  name = 'John Doe';
  email = 'john@example.com';
  isActive = true;
  
  // Form fields for user preferences
  theme = 'light';
  notifications = false;
  
  // Signal for user profile
  userProfile = signal<UserProfile>({
    name: this.name,
    email: this.email,
    active: this.isActive,
    lastUpdated: new Date(),
    preferences: {
      theme: this.theme,
      notifications: this.notifications,
      language: 'en'
    }
  });
  
  // Computed value based on the selected theme
  isDarkTheme = computed(() => {
    return this.userProfile().preferences?.theme === 'dark';
  });
  
  // Method to update the user profile
  updateProfile() {
    this.userProfile.update(profile => ({
      ...profile,
      name: this.name,
      email: this.email,
      active: this.isActive,
      lastUpdated: new Date()
    }));
  }
  
  // Method to update user preferences
  updatePreferences() {
    this.userProfile.update(profile => ({
      ...profile,
      preferences: {
        ...profile.preferences as UserPreferences,
        theme: this.theme,
        notifications: this.notifications
      },
      lastUpdated: new Date()
    }));
  }
} 