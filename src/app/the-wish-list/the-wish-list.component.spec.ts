import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheWishListComponent } from './the-wish-list.component';

describe('TheWishListComponent', () => {
  let component: TheWishListComponent;
  let fixture: ComponentFixture<TheWishListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheWishListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheWishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
