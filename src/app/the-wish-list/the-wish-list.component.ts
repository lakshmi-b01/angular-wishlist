import { Component, Input } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'the-wish-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './the-wish-list.component.html',
  styleUrl: './the-wish-list.component.css'
})
export class TheWishListComponent {

  @Input() wishes : WishItem[] = [];

  toggleItem(item : WishItem){
    item.isComplete = !item.isComplete;
    console.log(item);
  }

}
