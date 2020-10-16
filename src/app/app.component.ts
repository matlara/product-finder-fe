import { Component, OnInit } from "@angular/core";

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
  ) {}

  public ngOnInit(): void {
    
  }
}
