import { Component } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { EventService } from './../../shared/services/EvenService';
import { WishService } from './wish.service';
import { TheWishListComponent } from './the-wish-list/the-wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';

@Component({
  selector: 'app-wish',
  standalone: true,
  imports: [
    TheWishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
    WishListItemComponent,
  ],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent {

  items: WishItem[] = [];

  constructor(private events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish: any) => {
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }

  activeFilter: any;

  ngOnInit(): void {
    // Initialize the activeFilter after the component has been initialized
    this.activeFilter = (item: WishItem) => true; // Default filter to show all items
    this.wishService.getWishes().subscribe(
      (data: any) => {
      this.items = data;
    },
    (error : any) => {
      alert(error.message);
    }
    );
  }

  onAddWish(newWish: WishItem) {
    this.items.push(newWish);
  }

}
