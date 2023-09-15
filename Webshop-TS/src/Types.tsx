export interface Product {
  id: number
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
      "https://img.freepik.com/free-photo/green-apple-with-leaves_1101-453.jpg?w=740&t=st=1694767394~exp=1694767994~hmac=35cc27ac88cc21d04659eadf4e23ac120c7f8801200a83ca7557eb466367c923",
    description: "Juicy apple",
  },
  {
    id: 2,
    name: "Orange",
    price: 12,
    imgURL:
      "https://img.freepik.com/free-photo/orange-white-white_144627-16571.jpg?w=740&t=st=1694767415~exp=1694768015~hmac=731c2f9cb8e813514f9d30e90e31646854b20139b8a6009445f98db984c32c54",
    description: "Tasty Orange",
  },
  {
    id: 3,
    name: "Banana",
    price: 12,
    imgURL:
      "https://img.freepik.com/free-vector/vector-ripe-yellow-banana-bunch-isolated-white-background_1284-45456.jpg?w=740&t=st=1694767461~exp=1694768061~hmac=db51fc76d17ebcc686deeb27681c83ac74f6b0738b3a2a9ab2b9b032f2c7662c",
    description: "Tasty Banana",
  },
  {
    id: 4,
    name: "Strawberry",
    price: 12,
    imgURL:
      "https://img.freepik.com/free-photo/closeup-shot-fresh-ripe-strawberries-isolated-white-surface_181624-54939.jpg?w=740&t=st=1694767486~exp=1694768086~hmac=60560355a66bd5d4abe046c1e32dae1a91456882be94e9f34367c1e38bce1ae2",
    description: "Tasty Strawberry",
  },
  {
    id: 5,
    name: "Pineapple",
    price: 12,
    imgURL:
      "https://img.freepik.com/free-photo/pineapple-juicy-mellow-isolated-white_179666-678.jpg?w=826&t=st=1694767509~exp=1694768109~hmac=d414b994ebd7303bae38203993c968995f20b19b577f192e89527cef9714e36e",
    description: "Tasty Pineapple",
  },
  {
    id: 6,
    name: "Grapes",
    price: 12,
    imgURL:
      "https://img.freepik.com/free-photo/fresh-red-grapes-with-leaves-isolated-white_167946-37.jpg?w=826&t=st=1694767528~exp=1694768128~hmac=23fe46aa7082a10d0ad6b301ee57d753d189826977aecc343e905acd5d9f27d2",
    description: "Tasty Grapes",
  },
  {
    id: 7,
    name: "Watermelon",
    price: 12,
    imgURL:
      "https://img.freepik.com/free-photo/green-striped-ripe-watermelon-with-slice-cross-section-isolated-white-background-with-copy-space-text-images-special-kind-berry-sweet-pink-flesh-with-black-seeds-side-view_639032-1254.jpg?w=740&t=st=1694767546~exp=1694768146~hmac=a0ebfbb54c9de47e14a2a5988aa2f69bb95e93d1788839935375f682928e05a1",
    description: "Tasty Watermelon",
  },
  {
    id: 8,
    name: "Kiwi",
    price: 12,
    imgURL:
      "https://img.freepik.com/free-photo/fresh-kiwi-fruit-isolated_144627-30034.jpg?w=740&t=st=1694767565~exp=1694768165~hmac=39f8dbd95893c9ac906dfda3f0dadfcb6ff7f634b491cdbce669860a3d381d11",
    description: "Tasty Kiwi",
  },
  {
    id: 9,
    name: "Blueberry",
    price: 12,
    imgURL:
      "https://img.freepik.com/free-photo/juniper-berries-levitate-white-background_485709-58.jpg?w=740&t=st=1694767595~exp=1694768195~hmac=353f4398c512494828ab7a613d856446e2fe17253b103d323207d24dec21adfc",
    description: "Tasty Blueberry",
  },
  {
    id: 10,
    name: "Mango",
    price: 12,
    imgURL:
      "https://img.freepik.com/free-photo/mango-table_144627-16763.jpg?w=740&t=st=1694767612~exp=1694768212~hmac=c32fad83d6e1e3bf826376de1d63d379a5f68bb2a92725e017f893f44f848f84",
    description: "Tasty Mango",
  },
];

export default products;
