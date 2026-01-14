import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomBadge } from '@aespartal/mi-libreria';
import { CodeBlockComponent } from '../shared/code-block/code-block.component';

export type BadgeVariant = 'info' | 'success' | 'warning' | 'error';

interface BadgeDemo {
  label: string;
  variant: BadgeVariant;
}

@Component({
  selector: 'app-badges-demo',
  standalone: true,
  imports: [CommonModule, AtomBadge, CodeBlockComponent],
  templateUrl: './badges-demo.component.html',
  styleUrl: './badges-demo.component.scss',
})
export class BadgesDemoComponent {
  badges: BadgeDemo[] = [
    { variant: 'info', label: 'Info' },
    { variant: 'success', label: 'Success' },
    { variant: 'warning', label: 'Warning' },
    { variant: 'error', label: 'Error' },
  ];

  codeBasic = `<lib-atom-badge>Default</lib-atom-badge>`;

  codeVariants = `<lib-atom-badge variant="info">Info</lib-atom-badge>
<lib-atom-badge variant="success">Success</lib-atom-badge>
<lib-atom-badge variant="warning">Warning</lib-atom-badge>
<lib-atom-badge variant="error">Error</lib-atom-badge>`;

  codeDynamic = `// Component TypeScript
status: 'success' | 'error' = 'success';

// Template HTML
<lib-atom-badge [variant]="status">
  {{ status | uppercase }}
</lib-atom-badge>`;

  codeCounter = `<lib-atom-badge variant="error">
  Errores: {{ errorCount }}
</lib-atom-badge>`;
}
