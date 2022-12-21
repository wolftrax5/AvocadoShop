/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log("Happy hacking :)");
const BASE_URL = "https://platzi-avo.vercel.app";
const AVOCADO_URL = `${BASE_URL}/api/avo`;
const APP_NODE = document.querySelector("#app");

const generateNode = (element) => {
  const image = document.createElement("img");
  image.src = `${BASE_URL}${element.image}`;
  const title = document.createElement("h3");
  title.textContent = element.name;
  const price = document.createElement("div");
  price.textContent = element.price;
  const container = document.createElement("section");
  container.append(title, image, price);
  return container;
};

const fetchData = async () => {
  try {
    const response = await fetch(AVOCADO_URL);
    const dataResponse = await response.json();
    const avoNodeList = dataResponse.data.map(generateNode);

    APP_NODE.append(...avoNodeList);
  } catch (error) {
    console.error(error);
  }
};

fetchData();
