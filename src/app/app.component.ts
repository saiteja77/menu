import { Component } from '@angular/core';
import { MenuItem } from './interfaces/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Chirpus Pizza';

  menuItems: MenuItem[] = [{
      item: 'Chicken Fingers',
      category: 'dinner',
      price: 11.99
    },
    {
      item: 'Pizza',
      category: 'dinner',
      price: 11.99
    },
    {
      item: 'Wings',
      category: 'sides',
      price: 8.99
    },
    {
      item: 'Breadsticks',
      category: 'sides',
      price: 4.99
    },
    {
      item: 'Caesar Salad',
      category: 'salads',
      price: 5.99
    },
    {
      item: 'Cinnamon Roll',
      category: 'dessert',
      price: 8.99
    }
  ];


}
