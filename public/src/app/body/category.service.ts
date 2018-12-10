import { Injectable } from '@angular/core';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[] = [
    {
      name: 'Leisure Activities',
      subCategory: [
        'Cinema',
        'Club Contribution',
        'Celebration',
        'Presents',
        'Other'
      ]
    },
    {
      name: 'Demo',
      subCategory: [
        '1',
        'Celebration',
        'Presents',
        'Other'
      ]
    }
  ];
}
