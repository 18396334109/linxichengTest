import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClothesListComponent } from './clothes-list/clothes-list.component';
import { ClothesComponent } from './clothes/clothes.component';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'detail/:id', component: ClothesComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
