import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProductFinderRoutingModule } from "./product-finder-routing.module";
import { ProductFinderComponent } from "./product-finder.component";
@NgModule({
  declarations: [ProductFinderComponent],
  imports: [
    CommonModule,
    ProductFinderRoutingModule
  ]
})
export class ProductFinderModule {}
