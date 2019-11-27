import Hotel from './hotel';
import { HotelController } from './hotelController';

export default class HotelCollection {
    constructor(hotels) {
        this.hotels = [];
        // Por qué no this?
        hotels.forEach(hotel => {
            const h = new Hotel(hotel);
            this.hotels.push(h);
        });
        console.log('constructor hotelCollection');
        console.log(this.hotels);
    }
}