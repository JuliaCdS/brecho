import { Injectable } from "@angular/core";
import { Product } from "src/models/product.model";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    getProducts(): Product[]{
        return[
            {
                id: 1,
                name: 'Blusa preta',
                price: 15.99,
                imageUrl: 'assets/products/blusa.png',
                liked: false,
            },
            {
                id: 2,
                name: 'Kimono',
                price: 35.90,
                imageUrl: 'assets/products/kimono.png',
                liked: true,
            },
            {
                id: 3,
                name: 'Vestido azul',
                price: 28.75,
                imageUrl: 'assets/products/vestido.png',
                liked: true,
            },

        ];
    }

    getFeaturedProducts(): Product[] {
        return this.getProducts().slice (1, 3);
    }
    getBestSellingProducts(): Product[] {
        return this.getProducts().slice (1, 2);
    }
    }
