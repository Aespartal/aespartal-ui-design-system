import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface MenuItem {
  id: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  isOpen = input<boolean>(true);
  currentSection = input<string>('installation');
  menuItems = input<MenuItem[]>([]);

  sectionSelected = output<string>();
  toggleRequested = output<void>();

  onSectionSelect(sectionId: string) {
    this.sectionSelected.emit(sectionId);
  }

  onToggle() {
    this.toggleRequested.emit();
  }
}
