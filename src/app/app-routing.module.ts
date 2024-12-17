import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { TrainingComponent } from './training/training.component';
const routes: Routes = [
  {path:'home',component:HomeComponentComponent },
  {path:'ProductsCategory/:id',component:ProductsCategoryComponent},
  {path:'train',component:TrainingComponent},
  ​{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
