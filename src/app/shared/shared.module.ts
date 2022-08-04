import { NgModule } from "@angular/core";
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NoPageFoundComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NoPageFoundComponent
  ],
  imports: [

  ]
})
export class SharedModule {}
