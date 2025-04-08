import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-code-sample',
  standalone: true,
  imports: [CommonModule],
  template: `<code [innerHTML]="safeContent"></code>`,
  styles: [`
    code {
      background-color: #f0f0f0;
      padding: 2px 5px;
      border-radius: 3px;
      font-family: monospace;
    }
  `]
})
export class CodeSampleComponent implements OnChanges {
  @Input() content: string = '';
  safeContent: SafeHtml;
  
  constructor(private sanitizer: DomSanitizer) {
    this.safeContent = this.sanitizer.bypassSecurityTrustHtml('');
  }
  
  ngOnChanges() {
    // Escape any Angular template syntax
    const escapedContent = this.content
      .replace(/{{/g, '&#123;&#123;')
      .replace(/}}/g, '&#125;&#125;');
    
    this.safeContent = this.sanitizer.bypassSecurityTrustHtml(escapedContent);
  }
} 