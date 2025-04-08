import { Routes } from '@angular/router';
import { SignalInputsComponent } from './pages/signal-inputs/signal-inputs.component';

export const routes: Routes = [ 
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'signal-basics',
    loadComponent: () => import('./pages/signal-basics/signal-basics.component').then(m => m.SignalBasicsComponent)
  },
  {
    path: 'computed-signals',
    loadComponent: () => import('./pages/computed-signals/computed-signals.component').then(m => m.ComputedSignalsComponent)
  },
  {
    path: 'effect',
    loadComponent: () => import('./pages/effect/effect.component').then(m => m.EffectComponent)
  },
  {
    path: 'signal-inputs',
    component: SignalInputsComponent
  },
  {
    path: 'signal-models',
    loadComponent: () => import('./pages/signal-models/signal-models.component').then(m => m.SignalModelsComponent)
  },
  {
    path: 'css-learning',
    loadComponent: () => import('./pages/css-learning/css-learning.component').then(m => m.CssLearningComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
