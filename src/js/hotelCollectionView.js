import HotelView from './hotelView';

export default class HotelCollectionView {

    constructor(hotelCollection) {
        this.hotelCollection = hotelCollection;
    }

    render(div) {
        if (this.hotelCollection.hotels.length === 0) {
            div[0].appendChild(this.showEmptyPage());
        } else {
            div[0].appendChild(this.createHotelList());
        }
    }

    showEmptyPage() {
        const div = document.createElement('div');
        const template =  `<h2>Opppss.. No hay hoteles disponibles</h2>
                <h4>En estos momentos no tenemos ningún hotel disponible. Vuelva a intentarlo más tarde.</h4>`;
    
        div.innerHTML = template;
        return div;
    }

    createHotelList() {
        // Con fragment se evita el cross-site
        const fragment = document.createDocumentFragment();
        const list = document.createElement('ul');

        this.hotelCollection.hotels.forEach(hotel => {
            const hotelView = new HotelView(hotel.hotel);
            list.innerHTML += hotelView.create();  
        })
        
        fragment.appendChild(list);
        return list;
    }
}