import { Injectable } from '@angular/core';
import {UUID} from "angular2-uuid";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

   produit!:Array<any>;

  constructor() {
    
this.produit=[
  {id : UUID.UUID(), name : "Computer", price : 5400, promotion :true},
  {id : UUID.UUID(), name : "Printer", price : 1200, promotion : false},
  {id : UUID.UUID(), name : "Smart phone", price : 9000, promotion : true},
];
for (let i = 4; i <20 ; i++) {
  this.produit.push({id : UUID.UUID(), name : "Computer", price : 5400, promotion :true},)
  this.produit.push({id : UUID.UUID(), name : "Printer", price : 1200, promotion : false})
  this.produit.push({id : UUID.UUID(), name : "Smart phone", price : 9000, promotion : true})
}
   }

  public  getallproduit(){
    this.produit;
   }
}
