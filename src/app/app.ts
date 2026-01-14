import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent, type MenuItem } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { InstallationComponent } from './components/installation/installation.component';
import { ButtonsDemoComponent } from './components/buttons-demo/buttons-demo.component';
import { BadgesDemoComponent } from './components/badges-demo/badges-demo.component';
import { ThemingDemoComponent } from './components/theming-demo/theming-demo.component';
import { EventsDemoComponent } from './components/events-demo/events-demo.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    SidebarComponent,
    HeaderComponent,
    InstallationComponent,
    ButtonsDemoComponent,
    BadgesDemoComponent,
    ThemingDemoComponent,
    EventsDemoComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  // Control de tema
  isDarkMode = signal(false);

  // Control de menú lateral
  isSidebarOpen = signal(true);
  currentSection = signal<string>('installation');

  // Estado para eventos
  clickCount = 0;

  // Menú de componentes
  menuItems: MenuItem[] = [
    { id: 'installation', label: 'Installation', icon: '📦' },
    { id: 'buttons', label: 'Buttons', icon: '🔘' },
    { id: 'badges', label: 'Badges', icon: '🏷️' },
    { id: 'theming', label: 'Theming', icon: '🎨' },
    { id: 'events', label: 'Events & States', icon: '⚡' },
  ];

  toggleTheme() {
    this.isDarkMode.update((v) => !v);
    document.body.classList.toggle('dark-mode', this.isDarkMode());
  }

  toggleSidebar() {
    this.isSidebarOpen.update((v) => !v);
  }

  selectSection(sectionId: string) {
    this.currentSection.set(sectionId);
  }

  handleTestClick() {
    this.clickCount++;
  }
}
