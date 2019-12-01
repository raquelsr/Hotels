export default class Api {
  constructor() {
    this.URL = 'http://localhost:3000';
  }

  async getHotels() {
    const response = await fetch(`${this.URL}/hotels`);
    const data = await response.json();
    return data.hotels;
  }
}
