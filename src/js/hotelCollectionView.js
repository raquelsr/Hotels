import HotelView from './hotelView';

export default class HotelCollectionView {
    constructor(hotelCollection) {
        this.hotelCollection = hotelCollection;
    }

    showHotels(div) {
        div[0].appendChild(this.createList());
    }

    createList() {
        const list = document.createElement('ul');
        // Con fragment se evita el cross-site
        // const fragment = document.createDocumentFragment();
        //For each
        //this.hotelCollection.forEach((hotel) => {
        for(let i = 0; i < this.hotelCollection.hotels.length; i++) {
            const hotelView = new HotelView(this.hotelCollection.hotels[i]);
            list.innerHTML += hotelView.create();
            /*const node = createHotelNode(hotel);
            fragment.appendChild(node);*/
        }
        
        //list.appendChild(fragment);
        return list;
    }
}