import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Clothes } from './clothes';
import { ClothesList } from '../clothes-list/clothes-list';
import { ClothesServer } from './clothes.server';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {
  clothes: Clothes[];
  selectclothes: Clothes;
  constructor(  private clothesServer: ClothesServer,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.clothes = this.clothesServer.getClothes();
    this.selectclothes = ClothesList[0];
    // this.route.paramMap
    // .switchMap((params: ParamMap) => this.clothesServer.getCloth(+params.get('id')));
    // .subscribe(Clothes => this.Clothes = Clothes);
  }

}
