import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

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

  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void{
    this.updateFilter('0');
    this.cd.detectChanges(); 
  }

  listFilter : any = '0';

  updateFilter(value : any){
    this.filter = filters[value];
    this.filterChange.emit(this.filter);
  }

}
