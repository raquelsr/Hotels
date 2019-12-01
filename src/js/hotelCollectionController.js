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

    closeAllPanels() {
        const panels = document.getElementsByClassName('panel');
        for (let i = 0; i < panels.length; i++) {
            panels[i].classList.add('is-hidden');
        }
    }

    handleClick() {
        const accordions = document.getElementsByClassName('accordion');
        for (let i = 0; i < accordions.length; i++) {
            accordions[i].addEventListener('click', () => {
                this.closeAllPanels();
                const panel = accordions[i].querySelector('.panel');
                panel.classList.toggle('is-hidden');
            });
        }
    }
}