import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ProductService {

  private urlBase: string = "http://localhost:3000/product/";

  constructor(
    private readonly http: HttpClient
  ) {}

  public getByCode(code: string) {
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "method": "GET",
      "Application-Id": "product-service",
      "Channel": "110",
      "Reference-Operation": "getByCode",
      "Reference-Service": "getByCode",
      "Access-Control-Allow-Origin": "*",
      "Origin-addr": "Origin-addr"
    };

    const params = { id: code };
    const urlByCode = this.urlBase + "id/" + params.id;

    return this.http.get(urlByCode, { headers }).pipe(
      map((data: any) => {
        return data;
      }),
      catchError((err: any) => {
        return throwError(
          "Hubo un error en la petición al servicio de productos"
        );
      })
    );
  }

  public getByBrandDescription(word: string) {
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "method": "GET",
      "Application-Id": "product-service",
      "Channel": "110",
      "Reference-Operation": "getByBrandDescription",
      "Reference-Service": "getByBrandDescription",
      "Access-Control-Allow-Origin": "*",
      "Origin-addr": "Origin-addr"
    };

    const params = { word: word };
    const urlByBrandDescription = this.urlBase + "word/" + params.word;

    return this.http.get(urlByBrandDescription, { headers }).pipe(
      map((data: any) => {
        return data;
      }),
      catchError((err: any) => {
        return throwError(
          "Hubo un error en la petición al servicio de productos"
        );
      })
    );
  }

}
