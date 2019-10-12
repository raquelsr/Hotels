/* eslint-disable no-use-before-define */
import { getHotels } from './js/api';
import { createHotelNode } from './js/creator';

async function showHotels() {
  // const hotels = await this.getHotels(); --> esto me gustaría
  const hotels = await getHotels();
  const hotelsList = createList(hotels);
  const div = document.getElementsByClassName('hotels');
  div[0].appendChild(hotelsList);
}

function createList(hotels) {
  const list = document.createElement('ul');

  // Con fragment se evita el cross-site
  const fragment = document.createDocumentFragment();

  hotels.forEach((hotel) => {
    const node = createHotelNode(hotel);
    fragment.appendChild(node);
  });
  list.appendChild(fragment);
  return list;
}

window.onload = showHotels;
