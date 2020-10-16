import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProductFinderRoutingModule } from "./product-finder-routing.module";
import { ProductFinderComponent } from "./product-finder.component";
import { FinderComponent } from "./finder/finder.component";
import { ProductsComponent } from "./products/products.component";
@NgModule({
  declarations: [
    ProductFinderComponent,
    FinderComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductFinderRoutingModule
  ]
})
export class ProductFinderModule {}
