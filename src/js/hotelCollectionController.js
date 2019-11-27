import Api from './api';
import HotelCollection from './hotelCollection';
import HotelCollectionView from './hotelCollectionView';

export default class HotelCollectionController {
    async run() {
        const api = new Api();
        const hotels = await api.getHotels();
        const hotelCollection = new HotelCollection(hotels);
        const hotelsCollectionView = new HotelCollectionView(hotelCollection);
        hotelsCollectionView.showHotels(document.getElementsByClassName('hotels'));
    }
}