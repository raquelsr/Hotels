import Hotel from './hotel';

export default class HotelCollection {
  constructor(hotels) {
    this.hotels = [];
    hotels.forEach(hotel => {
      const h = new Hotel(hotel);
      this.hotels.push(h);
    });
  }
}
