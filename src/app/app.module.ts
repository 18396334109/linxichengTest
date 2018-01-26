import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClothesListComponent } from './clothes-list/clothes-list.component';
import { ClothesComponent } from './clothes/clothes.component';
import { ClothesServer } from './clothes/clothes.server';

import { AppRoutingModule } from './app.route.module';

@NgModule({
  declarations: [
    AppComponent,
    ClothesListComponent,
    ClothesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [ClothesServer],
  bootstrap: [
    AppComponent,
    ClothesListComponent,
    ClothesComponent
  ]
})
export class AppModule { }
