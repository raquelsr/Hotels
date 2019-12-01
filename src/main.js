import HotelCollectionController from './js/hotelCollectionController';

async function showHotels() {
  const controller = new HotelCollectionController();
  await controller.run();
  controller.closeAllPanels()
  controller.handleClick();
}

window.onload = showHotels;
