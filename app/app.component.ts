import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>{{currentFocus}}</h1>
    </div>
  `
})

export class AppComponent {
  currentFocus: String = 'A Wilder Vision';
}
