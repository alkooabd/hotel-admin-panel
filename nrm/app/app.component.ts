import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-sidebar (preventClose)="preventSidebarClose($event)"></app-sidebar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'narodna';

  izvestuvanjeLinkClicked: boolean = false;

  preventSidebarClose(value: boolean) {
    this.izvestuvanjeLinkClicked = value;
  }
}
