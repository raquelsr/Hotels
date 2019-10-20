import { getHotels } from './js/api';
import { createList } from './js/creator';

async function showHotels() {
  // const hotels = await this.getHotels(); --> esto me gustaría
  const hotels = await getHotels();
  const hotelsList = createList(hotels);
  const div = document.getElementsByClassName('hotels');
  div[0].appendChild(hotelsList);
}

window.onload = showHotels;
