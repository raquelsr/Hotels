import { request } from './request';

async function showHotels() {
  // const hotels = await this.getHotels();
  const hotels = await getHotels();

  const list = document.createElement('ul');

  request();
  // Con fragment se evita el cross-site
  const fragment = document.createDocumentFragment();

  hotels.forEach((hotel) => {
    const node = createHotelNode(hotel);
    fragment.appendChild(node);
  });

  list.appendChild(fragment);

  const div = document.getElementsByClassName('hotels');
  div[0].appendChild(list);

  const accordions = document.getElementsByClassName('accordion');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < accordions.length; i++) {
    controlClick(accordions[i]);
  }
}

async function getHotels() {
  const response = await fetch('http://localhost:3000/hotels');
  const data = await response.json();
  return data.hotels;
}

function createHotelNode(hotel) {
  const li = document.createElement('li');
  li.classList.add('accordion');
  const title = document.createElement('h2');
  const divInfo = document.createElement('div');
  divInfo.classList.add('panel');
  const p = document.createElement('p');
  p.textContent = hotel.price;
  title.textContent = hotel.name;
  divInfo.appendChild(p);
  li.appendChild(title);
  li.appendChild(divInfo);
  addInfo(divInfo, hotel);
  return li;
}

function controlClick(accordion) {
  accordion.addEventListener('click', () => {
    const panel = accordion.getElementsByClassName('panel');
    toggleClass(panel[0]);
  });
}

function toggleClass(panel) {
  if (panel.style.display === 'none') {
    panel.style.display = 'block';
  } else {
    panel.style.display = 'none';
  }
}

function addInfo(divInfo, hotel) {  
  const img = addImage(hotel);
  const stars = addStarts(hotel.rating);
  console.log(img)
  divInfo.appendChild(img);
  divInfo.appendChild(stars);
}

function addImage(hotel) {
  const imgElement = document.createElement('img');
  imgElement.setAttribute('src', `${hotel.imgUrl}`);
  imgElement.setAttribute('alt', hotel.name);
  return imgElement;
}

function addStarts(stars) {
  const p = document.createElement('p');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < stars; i++) {
    p.textContent += String.fromCodePoint(0x2B50);
  }
  return p;
}
window.onload = showHotels;
