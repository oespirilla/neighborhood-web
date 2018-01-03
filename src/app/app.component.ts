import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Residencial Zarahemla';
  adminOptions = [
    {
      name: 'Blocks',
    },
    {
      name: 'Houses',
    },
    {
      name: 'Neighbors',
    }
  ];
  userOptions = [
    {
      name: 'Security',
    },
    {
      name: 'Map',
    }
  ];
}
