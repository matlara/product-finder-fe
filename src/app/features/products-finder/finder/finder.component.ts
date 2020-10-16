import { EventEmitter, Output, Component, OnInit } from '@angular/core';
import { ProductService } from "../../../core/request-service/product-service.service";

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss']
})
export class FinderComponent implements OnInit {

  products: any;
  @Output() eventEmitter: EventEmitter <any> = new EventEmitter<any>();

  constructor(
    private readonly productService: ProductService
  ) {
  }

  ngOnInit() {
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

    const event = {
        search: search,
        products: this.products
    }

    this.eventEmitter.emit(event);
  }

}
