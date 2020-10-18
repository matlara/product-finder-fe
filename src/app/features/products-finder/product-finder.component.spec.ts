import { NO_ERRORS_SCHEMA } from "@angular/core";
import {
  async,
  ComponentFixture,
  TestBed
} from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ProductFinderComponent } from "./product-finder.component";

describe("ProductsComponent", () => {
  let component: ProductFinderComponent;
  let fixture: ComponentFixture<ProductFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductFinderComponent],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should create", () => {
    let event = {
      search: "181",
      products: [
        {
          brand: "rvblsml",
          description: "goeyxg nbowu",
          id: 181,
          image: "www.lider.cl/catalogo/images/toysIcon.svg",
          newPrice: 387861,
          price: 775722
        }
      ]
    }

    component.eventEmitted(event)

    expect(component.search).toBe("181");
    expect(component.products[0].id).toBe(181);
  });
  
});
