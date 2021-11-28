import { Product } from "./product";

export class Booking {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    date: Date;
    query: string;

    constructor(product: Product) {
        this.id = product.id;
        this.name = product.name;
        this.description = product.description;
        this. price = product.price;
        this.image = product.imageUrl;
        this.date = new Date();
        this.query = '';
    }
}
