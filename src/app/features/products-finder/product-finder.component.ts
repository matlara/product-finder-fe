
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-finder",
  templateUrl: "./product-finder.component.html",
  styleUrls: ["./product-finder.component.scss"]
})
export class ProductFinderComponent implements OnInit {
    public search: string = "";
    public products: any = [];

    constructor(
    ) { }

    public ngOnInit(): void {

    }

    eventEmitted(emitted: any) {
        this.search = emitted.search;
        this.products = emitted.products;
    }

}
