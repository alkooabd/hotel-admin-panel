import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Output() preventClose = new EventEmitter<boolean>();

  sidebarItems = [
    { label: 'izvestuvanje', route: '/izvestuvanje' },
    {
      label: 'Button 2',
      isDropdown: true,
      children: [
        { label: 'Submenu 1', route: '/submenu1' },
        { label: 'Submenu 2', route: '/submenu2' }
      ]
    },
    { label: 'Button 3', route: '/button3' }
  ];

  izvestuvanjeLinkClicked: boolean = false;

  preventSidebarCloseForIzvestuvanje(event: Event) {
    event.preventDefault();
    this.izvestuvanjeLinkClicked = true;
  }

  openDropdownIndex: number | null = null;

  toggleDropdown(event: Event, index: number) {
    event.preventDefault();

    if (this.izvestuvanjeLinkClicked) {
      this.izvestuvanjeLinkClicked = false;
      return;
    }

    this.openDropdownIndex = this.openDropdownIndex === index ? null : index;
  }
}
