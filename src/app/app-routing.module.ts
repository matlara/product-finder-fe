import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "product-finder",
    loadChildren: () =>
      import("./features/products-finder/product-finder.module").then(
        m => m.ProductFinderModule
      )
  },
  {
    path: "",
    redirectTo: "product-finder",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
