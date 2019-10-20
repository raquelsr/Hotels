/* eslint-disable import/prefer-default-export */
export async function getHotels() {
  const response = await fetch('http://localhost:3000/hotels');
  const data = await response.json();
  return data.hotels;
}
