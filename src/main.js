import { createList } from './js/creator';
import Api from './js/api';

async function showHotels() {
  const api = new Api();
  const hotels = await api.getHotels();
  const hotelsList = createList(hotels);
  const div = document.getElementsByClassName('hotels');
  div[0].appendChild(hotelsList);
}

window.onload = showHotels;
