import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProductFinderComponent } from "./product-finder.component";

const routes: Routes = [
  {
    path: "",
    component: ProductFinderComponent
  },
  {
    path: "",
    redirectTo: "/",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductFinderRoutingModule {}
