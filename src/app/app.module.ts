import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
//import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
/*
import { AppService } from "./app.service";
import { ErrorNoCargaPaginaComponent } from "./components/alertas/error-no-carga-pagina/error-no-carga-pagina.component";
import { Error505Component } from "./components/alertas/error505/error505.component";
import { BannerPrincipalComponent } from "./components/banner-principal/banner-principal.component";
import { BreadcrumbsComponent } from "./components/breadcrumbs/breadcrumbs.component";
import { ConoceNuestrosBeneficiosComponent } from "./components/conoce-nuestros-beneficios/conoce-nuestros-beneficios.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { ProgressCircleComponent } from "./components/progress-circle/progress-circle.component";
// manejo de errores
import { ErrorsInterceptorService } from "./core/interceptors/error-interceptor";

// service api
import { ApiServiceService } from "./core/api-service.service";
import { SuccessComponent } from "./components/alertas/success/success.component";
import { AutenticacionInvalidaComponent } from "./components/alertas/autenticacion-invalida/autenticacion-invalida.component";
import { ErrorPreguntasComponent } from "./components/alertas/error-preguntas/error-preguntas.component";
import { NoLogramosValidarTuIdentidadComponent } from "./components/alertas/no-logramos-validar-tu-identidad/no-logramos-validar-tu-identidad.component";
import { ErrorEquifaxComponent } from "./components/alertas/error-equifax/error-equifax.component";
import { ErrorInactividadComponent } from "./components/alertas/error-inactividad/error-inactividad.component";
*/

@NgModule({
  declarations: [
    AppComponent/*,
    LoaderComponent,
    ConoceNuestrosBeneficiosComponent,
    BannerPrincipalComponent,
    ProgressCircleComponent,
    BreadcrumbsComponent,
    ErrorNoCargaPaginaComponent,
    Error505Component,
    SuccessComponent,
    AutenticacionInvalidaComponent,
    ErrorPreguntasComponent,
    NoLogramosValidarTuIdentidadComponent,
    ErrorEquifaxComponent,
    ErrorInactividadComponent
    */
  ],
  imports: [
    HttpClientModule,
    BrowserModule/*,
    AppRoutingModule,
    BciSpinnerModule,
    BciCardModule,
    BciWkButtonModule,
    BciWkSelectChipRadioModule,
    BciWkInputTextModule,
    BciFormMsgModule,
    BciWkTypographyModule,
    BciWkDatepickerModule,
    BciWkSelectModule,
    BciWkInputPhoneModule,
    BciWkInputUfModule
    */
  ],
  providers: [
    /*
    AppService,
    ApiServiceService,
    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorsInterceptorService,
      multi: true
    }
    */
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
