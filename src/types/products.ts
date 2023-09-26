export interface DetailData {
  id: number;
  colors: string[];
  detailImage: string[];
  title: string;
  price: number;
  currentColor: string;
  sizes: Sizes[];
  conditions: string[];
  details: string;

  sizeGuide: {
    [index: string]: string[];
    size: string[];
  };
  shipping: string;
}

interface Sizes {
  content: string;
  isSelectable: boolean;
}
