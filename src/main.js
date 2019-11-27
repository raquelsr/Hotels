import HotelCollectionController from './js/hotelCollectionController';

function showHotels() {
  const controller = new HotelCollectionController();
  controller.run();
}

window.onload = showHotels;
