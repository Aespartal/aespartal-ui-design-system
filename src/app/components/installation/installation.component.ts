import { Component } from '@angular/core';
import { CodeBlockComponent } from '../shared/code-block/code-block.component';

@Component({
  selector: 'app-installation',
  standalone: true,
  imports: [CodeBlockComponent],
  templateUrl: './installation.component.html',
  styleUrl: './installation.component.scss',
})
export class InstallationComponent {
  codeInstall = `npm install @aespartal/mi-libreria`;

  codeUsage = `import { AtomButton, AtomBadge } from '@aespartal/mi-libreria';

@Component({
  selector: 'app-root',
  imports: [AtomButton, AtomBadge],
  templateUrl: './app.html'
})
export class App { }`;
}
