import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheWishListComponent } from './the-wish-list/the-wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';
import { FormsModule } from '@angular/forms';
import { WishComponent } from './wish.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    TheWishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
    WishListItemComponent,
    WishComponent,
  ],
  exports: [
    WishComponent,
    TheWishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
    WishListItemComponent,
  ]
})
export class WishModule { }
