/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */

function addText(tag, text) {
  const container = document.createElement(tag);
  container.textContent = text;
  return container;
}

function addImage(hotel) {
  const imageDiv = document.createElement('div');
  // const img = document.createElement('img');
  imageDiv.classList.add('image');
  // imageDiv.appendChild(img);
  /* 
  img.style.backgroundImage = "url('/imgs/nowhere.jpg')";
  img.style.width = '200px';
  img.style.height = '200px'; */
  return imageDiv;
}

function addStarts(stars) {
  const p = document.createElement('p');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < stars; i++) {
    p.textContent += String.fromCodePoint(0x2B50);
  }
  return p;
}

function addPrice(price) {
  const div = document.createElement('div');
  div.classList.add('price');
  const priceNumber = addText('span', `${price}€`);
  priceNumber.classList.add('price--number');
  const priceText = addText('span', 'Total hotel stay');
  priceText.classList.add('price--text');
  div.appendChild(priceNumber);
  div.appendChild(priceText);
  return div;
}
function addInfo(divInfo, hotel) {
  const img = addImage(hotel);
  const div = document.createElement('div');
  div.classList.add('info');
  const title = addText('h1', hotel.name);
  const stars = addStarts(hotel.rating);
  const price = addPrice(hotel.price);
  divInfo.appendChild(img);
  div.appendChild(title);
  div.appendChild(stars);
  div.appendChild(price);
  divInfo.appendChild(div);
}

function closeOtherPanels(panel) {
  const panels = document.getElementsByClassName('panel');
  for (let i = 0; i < panels.length; i++) {
    if (panels[i] !== panel) {
      panels[i].style.display = 'none';
    }
  }
}

function showPanel(panel) {
  // eslint-disable-next-line no-unused-expressions
  (panel.style.display === 'none') ? panel.style.display = 'flex' : panel.style.display = 'none';
}

function controlClick(accordion) {
  accordion.addEventListener('click', () => {
    const panel = accordion.getElementsByClassName('panel');
    closeOtherPanels(panel[0]);
    showPanel(panel[0]);
  });
}

export function createHotelNode(hotel) {
  const accordion = document.createElement('li');
  accordion.classList.add('accordion');
  const divInfo = document.createElement('div');
  divInfo.classList.add('panel');
  divInfo.style.display = 'none';
  const title = addText('h2', hotel.name);
  accordion.appendChild(title);
  accordion.appendChild(divInfo);
  addInfo(divInfo, hotel);
  controlClick(accordion);
  return accordion;
}
