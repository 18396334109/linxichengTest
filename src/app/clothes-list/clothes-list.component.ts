import { Component, OnInit } from '@angular/core';
import { Clothes } from '../clothes/clothes';
import { ClothesServer } from '../clothes/clothes.server';

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.css']
})
export class ClothesListComponent implements OnInit {
  clothes: Clothes[];
  selectclothes: Clothes;
  id:number;
  constructor(private myServer: ClothesServer) { }

  ngOnInit() {
    this.clothes = this.myServer.getClothes();
    this.selectclothes = this.clothes[0];
    this.id = 0;
  }
  onSelect(clothes: Clothes): void {
    this.selectclothes = clothes;
    this.id = this.selectclothes.id;
  }
}
