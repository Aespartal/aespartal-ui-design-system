import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomButton } from '@aespartal/mi-libreria';
import { CodeBlockComponent } from '../shared/code-block/code-block.component';

@Component({
  selector: 'app-events-demo',
  standalone: true,
  imports: [CommonModule, AtomButton, CodeBlockComponent],
  templateUrl: './events-demo.component.html',
  styleUrl: './events-demo.component.scss',
})
export class EventsDemoComponent {
  clickCount = input<number>(0);
  testClicked = output<void>();

  codeEvents = `// Component TypeScript
clickCount = 0;

handleClick() {
  this.clickCount++;
}

// Template HTML
<lib-atom-button
  [label]="'Clicks: ' + clickCount"
  (clicked)="handleClick()">
</lib-atom-button>`;

  codeConditional = `<lib-atom-button
  [label]="isProcessing ? 'Loading...' : 'Submit'"
  [disabled]="isProcessing"
  (clicked)="submitForm()">
</lib-atom-button>`;

  onTestClick() {
    this.testClicked.emit();
  }
}
