import { NgModule } from "@angular/core";

//Module
import { SharedModule } from './../shared/shared.module';

//routes
import { PAGES_ROUTES } from './pages.routes';

//components
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { ProgessComponent } from './progess/progess.component';





@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgessComponent,
    Graficas1Component
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgessComponent,
    Graficas1Component
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES
  ]
})

export class PagesModule {}
