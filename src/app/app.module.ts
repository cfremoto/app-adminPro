import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

//Routes
import { APP_ROUTES } from './app.routes';

//Modules
import { PagesModule } from './pages/pages.module';

//components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    PagesModule,
    APP_ROUTES

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
