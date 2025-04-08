import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-css-learning',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './css-learning.component.html',
  styleUrls: ['./css-learning.component.scss']
})
export class CssLearningComponent {} 