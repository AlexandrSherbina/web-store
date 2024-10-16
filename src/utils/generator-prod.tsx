import { faker } from "@faker-js/faker";

function generateProduct() {
  return {
    id: faker.string.uuid(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price({ min: 100, max: 900, dec: 0, symbol: "$" }),
    category: faker.commerce.department(),
    img: faker.image.urlPicsumPhotos({ width: 160, height: 140, blur: 0 }),
    rating: faker.number.float({ min: 1, max: 5, multipleOf: 0.1 }),
    reviews: faker.number.int({ min: 1, max: 1000 }),
  };
}

// Генерация 15 товаров

export function createGroupProduct(maxOfProducts: number = 15) {
  const genProducts = [];
  for (let i = 0; i < maxOfProducts; i++) {
    genProducts.push(generateProduct());
  }
  return genProducts;
}
