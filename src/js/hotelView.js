export default class HotelView {

    constructor(hotel) {
        this.hotel = hotel;
    }

    create() {
        return `<li class="accordion"> 
                    <h2>${this.hotel.name}</h2>
                    <div class="panel">
                        <div class="image" src="/../${this.hotel.imgUrl}"></div>
                        <div class="info">
                            <h1>${this.hotel.name}</h1>
                            <p>${String.fromCodePoint(0x2B50).repeat(this.hotel.rating)}</p>
                            <div class="price">
                                <span class="price--number">${this.hotel.price}</span>
                                <span class="price--text">Total hotel stay</span>
                            </div>
                        </div>
                    </div>
                </li>`;
    }
}