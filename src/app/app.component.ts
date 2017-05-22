import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <header class="header"></header>
  <menu></menu>
  <widget></widget>
  <router-outlet></router-outlet>
  <footer></footer>
  `,
})
export class AppComponent  { name = 'Angular'; }
