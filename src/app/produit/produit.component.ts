import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit{
   produit!:Array<any>;


//Creation tableau de produit
/* private produit!:Array<any>; */

// product!:Array<any>; tt   ca se fait  en service

//il faut inialiser le tableau sinn on ecrit  : product:Array<any>| undefined;
// ou bien product!:Array<any>;

handelDeleteProduct(p:any){
let idex=this.produit.indexOf(p);
this.produit.splice(p,1);
}


//pour  utiliser un service dans un composant il faut l'injcter acev le  constructeur
constructor(){
  

}


  ngOnInit(): void {
   

  }



}
