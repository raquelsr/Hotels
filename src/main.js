import HotelCollectionController from './js/hotelCollectionController';

async function showHotels() {
  const controller = new HotelCollectionController();
  await controller.run();
  // ¿Dónde hago el control del click?
  controller.closeAllPanels();
  controller.handleClick();
}

window.onload = showHotels;
