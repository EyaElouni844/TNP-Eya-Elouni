import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListMixtComponent } from './product-list-mixt.component';

describe('ProductListMixtComponent', () => {
  let component: ProductListMixtComponent;
  let fixture: ComponentFixture<ProductListMixtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListMixtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListMixtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
