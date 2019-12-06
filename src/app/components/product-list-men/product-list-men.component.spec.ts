import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListMenComponent } from './product-list-men.component';

describe('ProductListMenComponent', () => {
  let component: ProductListMenComponent;
  let fixture: ComponentFixture<ProductListMenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListMenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
