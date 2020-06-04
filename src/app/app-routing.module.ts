import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: '', redirectTo:'main-page', pathMatch: 'full', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
