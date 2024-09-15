import { Component, Input } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListItemComponent } from '../wish-list-item/wish-list-item.component';

@Component({
  selector: 'the-wish-list',
  standalone: true,
  imports: [CommonModule, FormsModule, WishListItemComponent],
  templateUrl: './the-wish-list.component.html',
  styleUrl: './the-wish-list.component.css'
})
export class TheWishListComponent {

  @Input() wishes : WishItem[] = [];

}
