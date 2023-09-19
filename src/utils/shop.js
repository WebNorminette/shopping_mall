const rand_0_99 = Math.floor(Math.random() * 100);
const dummyProduct = [
  { id: rand_0_99, name: "T-shirt", price: "₩50,000" },
  { id: rand_0_99, name: "Pants", price: "₩20,000" },
  { id: rand_0_99, name: "Shoes", price: "₩30,000" },
  { id: rand_0_99, name: "T-shirt", price: "₩50,000" },
  { id: rand_0_99, name: "Pants", price: "₩20,000" },
  { id: rand_0_99, name: "Shoes", price: "₩30,000" },
];

export const getProductListApi = async (pageParam) => {
  let data = [];
  const lastPage = 5;

  // const content = {
  //   offset: pages * 10,
  // };

  for (let page = 0; page < pageParam + 1; page++) {
    data = [...data, ...dummyProduct];
  }

  return {
    result: data,
    nextPage: pageParam + 1,
    main: data?.data?.main,
    isLast: pageParam === lastPage,
  };
};

export const getProductDetailDataApi = async (productId) => {
  return {
    id: productId,
    colors: ["pink", "red", "green", "blue", "white", "black", "orange", "olive", "yellow", "grey"],
    detailImage: [
      "pink",
      "red",
      "green",
      "blue",
      "white",
      "black",
      "orange",
      "olive",
      "yellow",
      "grey",
    ],
    title: "BEACH PANT BRUSHED COTTON",
    price: 195000,
    currentColor: "pink",
    sizes: [
      { content: "XS", isSelectable: false },
      { content: "S", isSelectable: true },
      { content: "M", isSelectable: true },
      { content: "L", isSelectable: true },
      { content: "XL", isSelectable: true },
    ],
    conditions: ["7만원 이상 구매시 무료 배송"],
    details: `Classic brushed twill beach pant.

    - Elastic waistband with interior drawcord
    - Faux fly
    - On-seam side pockets
    - Rear yoke with on-seam welt pocket
    - Stüssy big stock flag label at left thigh
    - Unisex
    - 100% Cotton
    - Imported`,

    sizeGuide: {
      size: ["XS", "S", "M", "L", "XL"],
      waist: [34.3, 36.8, 39.4, 41.9, 44.5],
      frontRise: [29.8, 31.1, 32.4, 33.7, 34.9],
      inseam: [73.7, 74.9, 76.2, 77.5, 78.7, 80],
      others: `WAIST - Measure across waistband

RISE - Measure from top of waistband to crotch

INSEAM - Measure from crotch to hem

LEG OPENING - Measure across bottom hem

THIGH - Measure 1" below crotch straight across`,
    },
    shipping: "롯데택배 (1588-2121)",
  };
};
