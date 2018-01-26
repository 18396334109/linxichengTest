import { Injectable } from '@angular/core';
import { Clothes } from '../clothes/clothes';
import { ClothesList } from '../clothes-list/clothes-list';

@Injectable()
export class ClothesServer {
    // SClothes: Clothes;
    getClothes(): Clothes[] {
      return ClothesList;
    }
    // getClothesId(id: number): Promise<Clothes> {
    //   return this.getClothes();
    //              .then(SClothes => SClothes.find( SClothes => SClothes.id === id));
    // }
}
