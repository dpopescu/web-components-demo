import { Component } from '@angular/core';

@Component({
  selector: 'web-components-demo-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ng-app';

  onHeaderButtonClick(e: Event) {
    console.log(e);
  }
}
