import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>It's a coool app!</h1>
            <task-manager></task-manager>`,
})
export class AppComponent  { name = 'Angular'; }
