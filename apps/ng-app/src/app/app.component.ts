import { Component } from '@angular/core';

@Component({
  selector: 'web-components-demo-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ng-app';

  clickHandler() {
    alert('clicked');
  }
}
