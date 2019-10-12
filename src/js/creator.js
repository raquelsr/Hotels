/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */

function addText(tag, text) {
  const container = document.createElement(tag);
  container.textContent = text;
  return container;
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

function addInfo(divInfo, hotel) {
  const img = addImage(hotel);
  const stars = addStarts(hotel.rating);
  const price = addText('span', hotel.price);
  divInfo.appendChild(img);
  divInfo.appendChild(stars);
  divInfo.appendChild(price);
}

function toggleClass(panel) {
  if (panel.style.display === 'none') {
    panel.style.display = 'block';
  } else {
    panel.style.display = 'none';
  }
}

function controlClick(accordion) {
  accordion.addEventListener('click', () => {
    const panel = accordion.getElementsByClassName('panel');
    toggleClass(panel[0]);
  });
}

export function createHotelNode(hotel) {
  const accordion = document.createElement('li');
  accordion.classList.add('accordion');
  const divInfo = document.createElement('div');
  divInfo.classList.add('panel');
  const title = addText('h2', hotel.name);
  accordion.appendChild(title);
  accordion.appendChild(divInfo);
  addInfo(divInfo, hotel);
  controlClick(accordion);
  return accordion;
}
