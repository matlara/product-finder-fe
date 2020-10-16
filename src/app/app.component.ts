import { Component, OnInit } from "@angular/core";
//import { AppService } from "./app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public statusAlert: any;
  public currentPage!: string;
  public isLoaderShowing = false;
  public isBreadcrumbActive!: boolean;

  constructor(
    //private readonly service: AppService
  ) {}

  public ngOnInit(): void {
    
    /*
    this.service.currentPage$.subscribe(current => {
      this.currentPage = current;
    });

    this.service.isBreadcrumbsActive$.subscribe(
      isActive => (this.isBreadcrumbActive = isActive)
    );
    */
  }
}
