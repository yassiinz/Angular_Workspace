import { Pipe, PipeTransform } from '@angular/core';
import { Categorie } from './models/categorie';

@Pipe({
  name: 'categoriePipe'
})
export class CategoriePipePipe implements PipeTransform {

  transform(categories: Categorie[], searchTerm: string): Categorie[] {
    if (!categories || !searchTerm) {
      return categories;
    }
    return categories.filter(categorie => 
      categorie.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }

}
