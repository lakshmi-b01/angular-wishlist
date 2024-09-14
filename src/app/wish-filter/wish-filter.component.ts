import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete
]

@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent implements OnInit{

  @Output() filterChanged = new EventEmitter<any>();

  constructor(){}

  ngOnInit(): void{
    this.filterChanged.emit(filters[0]);
  }

  listFilter : any = '0';

  changeFilter(value : any){
    this.filterChanged.emit(filters[value]);
  }

}
