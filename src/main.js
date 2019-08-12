
async function showHotels() {

    const hotels = await this.getHotels();
    const list = document.createElement('ul');

    // Con fragment se evita el cross-site
    const fragment = document.createDocumentFragment();

    hotels.forEach((hotel) => {
        const li = document.createElement('li');
        li.textContent = hotel.name;
        fragment.appendChild(li);
    });

    list.appendChild(fragment);

    const div = document.getElementsByClassName('hotels');
    div[0].appendChild(list);
}

async function getHotels() {
    const response = await fetch('http://localhost:3000/hotels');
    const data = await response.json();
    return data.hotels;
}

window.onload = showHotels;
    
