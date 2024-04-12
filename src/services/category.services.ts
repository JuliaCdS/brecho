import { Injectable } from "@angular/core";
import { Category } from "src/models/category.model";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    getCategories(): Category[]{
        return[
            {
                title: 'Woman',
                image: 'assets/products/blusa.png'
            },
            {
                title: 'Dress',
                image: 'assets/products/vestido.png'
            },
        ];
    }
}