import { Booking } from "./booking";

export class CartItem {
    id: string;
    name: string;
    image: string;
    bookingDate: Date;
    price: number;
    quantity: number;

    constructor(booking: Booking) {
        this.id = booking.id;
        this.name = booking.name;
        this.image = booking.image;
        this.bookingDate = booking.date;
        this.price = booking.price;
        this.quantity = 1;
    }
}
