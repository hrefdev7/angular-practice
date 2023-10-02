import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
},
{
    path: 'services',
    component: ServicesComponent
},
{
    path: 'produit',
    component: ProduitComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
