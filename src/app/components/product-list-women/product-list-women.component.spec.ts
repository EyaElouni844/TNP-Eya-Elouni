import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListWomenComponent } from './product-list-women.component';

describe('ProductListWomenComponent', () => {
  let component: ProductListWomenComponent;
  let fixture: ComponentFixture<ProductListWomenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListWomenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
