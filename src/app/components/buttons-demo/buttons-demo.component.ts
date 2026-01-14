import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomButton } from '@aespartal/mi-libreria';
import { CodeBlockComponent } from '../shared/code-block/code-block.component';

@Component({
  selector: 'app-buttons-demo',
  standalone: true,
  imports: [CommonModule, AtomButton, CodeBlockComponent],
  templateUrl: './buttons-demo.component.html',
  styleUrl: './buttons-demo.component.scss',
})
export class ButtonsDemoComponent {
  sizes = ['sm', 'md', 'lg'] as const;

  codeBasic = `<lib-atom-button label="Click me"></lib-atom-button>`;

  codeSizes = `<lib-atom-button label="Small" size="sm"></lib-atom-button>
<lib-atom-button label="Medium" size="md"></lib-atom-button>
<lib-atom-button label="Large" size="lg"></lib-atom-button>`;

  codeVariants = `<lib-atom-button label="Solid" variant="solid"></lib-atom-button>
<lib-atom-button label="Outline" variant="outline"></lib-atom-button>`;

  codeIcon = `<lib-atom-button
  label="Save"
  (clicked)="handleSave()">
  <span leftIcon>💾</span>
</lib-atom-button>`;

  codeDisabled = `<lib-atom-button
  label="Disabled"
  [disabled]="true">
</lib-atom-button>`;
}
