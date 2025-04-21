import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-extension-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './extension-panel.component.html',
  styleUrl: './extension-panel.component.css'
})
export class ExtensionPanelComponent {
  @Input() question: string = '';
  @Input() questionNumber: number = 1;
  @Input() title: string = ''; // Alternative to question
  @Input() content: string = ''; // Optional content as string input
  @Input() theme: 'light' | 'dark' | 'orange' = 'light'; // Theme options
  @Input() showIcon: boolean = true; // Whether to show the arrow icon
  
  isExpanded: boolean = false;
  
  togglePanel() {
    this.isExpanded = !this.isExpanded;
  }
  
  // Get the displayed title from either title or question+number
  get displayTitle(): string {
    if (this.title) {
      return this.title;
    }
    return `${this.questionNumber}.${this.question}`;
  }
}
