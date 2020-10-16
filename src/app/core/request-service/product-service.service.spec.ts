import { TestBed } from "@angular/core/testing";
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";

import { ProductService } from "./product-service.service";

describe("ProductService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient]
    })
  );

  it("should be created", () => {
    const service: ProductService = TestBed.get(
      ProductService
    );
    expect(service).toBeTruthy();
  });
});
