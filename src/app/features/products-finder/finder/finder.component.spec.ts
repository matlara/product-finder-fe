import { NO_ERRORS_SCHEMA } from "@angular/core";
import {
  async,
  ComponentFixture,
  TestBed
} from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FinderComponent } from "./finder.component";
import { ProductService } from "../../../core/request-service/product-service.service";
import { throwError } from 'rxjs/internal/observable/throwError';

describe("ProductsComponent", () => {
  let component: FinderComponent;
  let fixture: ComponentFixture<FinderComponent>;
  let productService: ProductService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FinderComponent],
      providers: [ ProductService ],
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
    fixture = TestBed.createComponent(FinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    productService = TestBed.get(ProductService);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should findProducts return a list using method getByBrandDescription if the search is a word", () => {
    const spy = jest.spyOn(productService, 'getByBrandDescription');

    component.findProducts("abba");
    
    expect(component).toBeTruthy();
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith("abba");
  });

  it("should findProducts return error using method getByBrandDescription", () => {
    const spy = jest
      .spyOn(productService, 'getByBrandDescription')
      .mockReturnValue(throwError('Some error information'));

    component.findProducts("abba");
    
    expect(component).toBeTruthy();
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith("abba");
  });

  it("should findProducts return a list with one value using method getByCode if the search is a number", () => {
    const spy = jest.spyOn(productService, 'getByCode');

    component.findProducts("181");
    
    expect(component).toBeTruthy();
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith("181");
  });

  it("should findProducts return error using method getByCode", () => {
    const spy = jest
      .spyOn(productService, 'getByCode')
      .mockReturnValue(throwError('Some error information'));

    component.findProducts("181");
    
    expect(component).toBeTruthy();
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith("181");
  });

});
