// Const
const BASE_URL = "https://platzi-avo.vercel.app";
const AVOCADO_URL = `${BASE_URL}/api/avo`;
const APP_NODE = document.querySelector("#app");
// INTL
// format - dates & money
const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat("en-En", {
    style: "currency",
    currency: "USD",
  }).format(price);
  return newPrice;
};
// Generate Avocado Cards
const generateNode = (element) => {
  const image = document.createElement("img");
  image.className =
    "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
  image.src = `${BASE_URL}${element.image}`;

  const title = document.createElement("h3");
  title.className = "text-lg";
  title.textContent = element.name;

  const price = document.createElement("span");
  price.className = "text-gray-600";
  price.textContent = formatPrice(element.price);

  const priceAndTitle = document.createElement("div");
  priceAndTitle.className = "text-center md:text-left";
  priceAndTitle.appendChild(title);
  priceAndTitle.appendChild(price);

  const card = document.createElement("section");
  card.className =
    "md:flex bg-white rounded-lg p-6 hover:bg-gray-300 hover:shadow-xl";
  card.append(image, priceAndTitle);
  return card;
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
