export default class HotelView {

    constructor(hotel) {
        debugger;
        this.hotel = hotel;
    }

    create() {
        return `<li class="accordion"> 
                    <h2>${this.hotel.hotel.name}</h2>
                    <div class="panel" style="display:none">
                        <div class="image" src="/../../imgs/${this.hotel.hotel.img}"></div>
                        <div class="info">
                            <h1>${this.hotel.hotel.name}</h1>
                            <p>${String.fromCodePoint(0x2B50).repeat(this.hotel.hotel.rating)}</p>
                            <div class="price">
                                <span class="price--number">${this.hotel.hotel.price}</span>
                                <span class="price--text">Total hotel stay</span>
                            </div>
                        </div>
                    </div>
                </li>`;
    }
}