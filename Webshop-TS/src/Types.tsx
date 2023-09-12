export interface Product {
  id: number | string
  name: string;
  price: number;
  imgURL: string;
  description?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Apple",
    price: 10,
    imgURL:
      "https://img.freepik.com/premium-psd/ripe-whole-green-apple-with-half-leaf_34168-1625.jpg?w=1380",
    description: "Juicy apple",
  },
  {
    id: 2,
    name: "Orange",
    price: 12,
    imgURL:
      "https://img.freepik.com/premium-psd/fresh-orange-sliced-with-leaves-isolated-premium-psd_328278-1570.jpg?w=996",
    description: "Tasty Orange",
  },
  {
    id: 3,
    name: "Banana",
    price: 12,
    imgURL:
      "https://img.freepik.com/premium-psd/banana-isolated_88281-5284.jpg",
    description: "Tasty Banana",
  },
  {
    id: 4,
    name: "Strawberry",
    price: 12,
    imgURL:
      "https://img.freepik.com/premium-psd/strawberries-isolated_328278-300.jpg",
    description: "Tasty Strawberry",
  },
  {
    id: 5,
    name: "Pineapple",
    price: 12,
    imgURL:
      "https://img.freepik.com/premium-psd/fresh-pineapple-isolated-premium-psd_328278-735.jpg",
    description: "Tasty Pineapple",
  },
  {
    id: 6,
    name: "Grapes",
    price: 12,
    imgURL:
      "https://img.freepik.com/premium-psd/fresh-red-grape-with-leaves-isolated-premium-psd_328278-798.jpg?w=1060",
    description: "Tasty Grapes",
  },
  {
    id: 7,
    name: "Watermelon",
    price: 12,
    imgURL:
      "https://img.freepik.com/premium-psd/watermelon-isolated-premium-psd_328278-538.jpg",
    description: "Tasty Watermelon",
  },
  {
    id: 8,
    name: "Kiwi",
    price: 12,
    imgURL:
      "https://img.freepik.com/premium-psd/fresh-kiwi-fruit-with-leaves-isolated-premium-psd_328278-840.jpg",
    description: "Tasty Kiwi",
  },
  {
    id: 9,
    name: "Blueberry",
    price: 12,
    imgURL:
      "https://img.freepik.com/premium-psd/fresh-blueberry-with-leaves-isolated-premium-psd_328278-945.jpg?w=1380",
    description: "Tasty Blueberry",
  },
  {
    id: 10,
    name: "Mango",
    price: 12,
    imgURL:
      "https://img.freepik.com/premium-psd/sliced-mango-alpha-layer_610539-436.jpg?w=1800",
    description: "Tasty Mango",
  },
];

export default products;
