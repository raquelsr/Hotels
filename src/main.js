
function showHotels() {
    console.log('work')
    const hotels = ['NH', 'PARIS', 'AC', 'MELIA'];
    const list = document.createElement('ul');

    // Con fragment se evita el cross-site
    const fragment = document.createDocumentFragment();

    hotels.forEach((hotel) => {
        const li = document.createElement('li');
        li.textContent = hotel;
        fragment.appendChild(li);
    });

    list.appendChild(fragment);

    const div = document.getElementsByClassName('hotels');
    div[0].appendChild(list);
}

window.onload = showHotels;
    
