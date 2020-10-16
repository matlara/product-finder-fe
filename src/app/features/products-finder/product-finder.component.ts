
import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../core/request-service/product-service.service";

@Component({
  selector: "app-product-finder",
  templateUrl: "./product-finder.component.html",
  styleUrls: ["./product-finder.component.scss"]
})
export class ProductFinderComponent implements OnInit {
    public products: any = [];

    constructor(
        private readonly productService: ProductService,
    ) { }

    public ngOnInit(): void {

    }

    public findProducts(search: any): void {
        this.products = [];

        if (isNaN(search)) {
            this.productService.getByBrandDescription(String(search)).subscribe(
                result => {
                    for (var i = 0; i < result.length; i++) {
                        this.products.push(result[i]);
                    }
                },
                (error: any) => {
                    console.log(error);
                }
            );
        }
        else if (!isNaN(search)) {
            this.productService.getByCode(search).subscribe(
                result => {
                    this.products.push(result);
                },
                (error: any) => {
                    console.log(error);
                }
            );
        }
    }

}
