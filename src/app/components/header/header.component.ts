import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isDarkMode = input<boolean>(false);
  themeToggled = output<void>();
  menuToggled = output<void>();

  onToggleTheme() {
    this.themeToggled.emit();
  }

  onMenuToggle() {
    this.menuToggled.emit();
  }
}
