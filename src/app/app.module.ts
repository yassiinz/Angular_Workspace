import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ListCategoriesComponentComponent } from './list-categories-component/list-categories-component.component';
import { HighlightDirective } from './highlight.directive';
import { CategoriePipePipe } from './categorie-pipe.pipe';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { TrainingComponent } from './training/training.component';
import { TrainDirecDirective } from './train-direc.directive';
import { TrainPipePipe } from './train-pipe.pipe';
import { FormProductComponent } from './form-product/form-product.component';
import { ReactiveFormProductComponent } from './reactive-form-product/reactive-form-product.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    HomeComponentComponent,
    ListCategoriesComponentComponent,
    HighlightDirective,
    CategoriePipePipe,
    NotFoundPageComponent,
    ProductsCategoryComponent,
    TrainingComponent,
    TrainDirecDirective,
    TrainPipePipe,
    FormProductComponent,
    ReactiveFormProductComponent,
    ParentComponent,
    ChildComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
