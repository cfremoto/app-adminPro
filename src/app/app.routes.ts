import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from "./login/register.component";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { PagesComponent } from "./pages/pages.component";
import { ProgessComponent } from './pages/progess/progess.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';


const appRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'progress',
        component: ProgessComponent
      },
      {
        path: 'graficas1',
        component: Graficas1Component
      },
      {
        path: '',
        redirectTo: '/dashboard', pathMatch: 'full'
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    component: NoPageFoundComponent
  }
]


export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true})
