import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
/*
import { BreadcrumbsComponent } from "./components/breadcrumbs/breadcrumbs.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { LoaderService } from "./components/loader/loader.service";
*/
describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent/*, LoaderComponent, BreadcrumbsComponent*/],
      providers: [/*LoaderService*/],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  test("is created", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
