import Api from './api';
import HotelCollection from './hotelCollection';
import HotelCollectionView from './hotelCollectionView';

export default class HotelCollectionController {
    constructor() {
        this.api = new Api();
    }

    async getHotels() {
        return await this.api.getHotels();
    }

    async run() {
        const hotels = await this.getHotels();
        const hotelCollection = new HotelCollection(hotels);
        const hotelsCollectionView = new HotelCollectionView(hotelCollection);
        hotelsCollectionView.render(document.getElementsByClassName('hotels'));
    }
}