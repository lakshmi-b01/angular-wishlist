import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TheWishListComponent } from './the-wish-list/the-wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';
import { EventService } from './../shared/services/EvenService';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, TheWishListComponent, AddWishFormComponent, WishFilterComponent, WishListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // providers: [EventService] 
})
export class AppComponent implements OnInit {
  items : WishItem[]= [
    new WishItem('Learn Angular', true),
    new WishItem('Drink Coffee'),
    new WishItem('Go on a hike')
  ];

  constructor(private events: EventService){
    events.listen('removeWish', (wish : any) => {
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    }); 
  }

  activeFilter: any;

  ngOnInit(): void {
    // Initialize the activeFilter after the component has been initialized
    this.activeFilter = (item: WishItem) => true; // Default filter to show all items
  }

  onAddWish(newWish: WishItem) {
    this.items.push(newWish);
  }

}
