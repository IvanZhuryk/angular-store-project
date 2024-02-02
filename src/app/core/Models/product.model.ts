export class ProductModel {
  id: number;
  title: string;
  price: number;
  category: {
    id: number;
    name: string;
    image: string;
  };
  image: string[];
}
