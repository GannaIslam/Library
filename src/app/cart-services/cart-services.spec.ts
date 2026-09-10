import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartServices } from './cart-services';

describe('CartServices', () => {
  let component: CartServices;
  let fixture: ComponentFixture<CartServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartServices],
    }).compileComponents();

    fixture = TestBed.createComponent(CartServices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
