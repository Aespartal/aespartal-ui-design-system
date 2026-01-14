import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomButton } from '@aespartal/mi-libreria';
import { CodeBlockComponent } from '../shared/code-block/code-block.component';

interface ThemePreset {
  name: string;
  primary: string;
  hover: string;
  icon: string;
}

@Component({
  selector: 'app-theming-demo',
  standalone: true,
  imports: [CommonModule, AtomButton, CodeBlockComponent],
  templateUrl: './theming-demo.component.html',
  styleUrl: './theming-demo.component.scss',
})
export class ThemingDemoComponent {
  themes: ThemePreset[] = [
    { name: 'Brand Default', primary: '#ff5722', hover: '#e64a19', icon: '🚀' },
    { name: 'Success', primary: '#10b981', hover: '#059669', icon: '✅' },
    { name: 'Danger', primary: '#ef4444', hover: '#dc2626', icon: '🗑️' },
    { name: 'Purple', primary: '#8b5cf6', hover: '#7c3aed', icon: '🔮' },
  ];

  codeAngularBindings = `<div [style.--aes-primary-color]="'#ff5722'"
     [style.--aes-primary-hover]="'#e64a19'">
  <lib-atom-button label="Custom Color"></lib-atom-button>
</div>`;

  codeGlobalCSS = `:root {
  --aes-primary-color: #3b82f6;
  --aes-primary-hover: #2563eb;
}

/* Dark theme */
body.dark {
  --aes-primary-color: #60a5fa;
  --aes-primary-hover: #3b82f6;
}`;
}
