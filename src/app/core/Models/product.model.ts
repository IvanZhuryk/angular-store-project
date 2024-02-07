export class ProductModel {
  id: number;
  title: string;
  price: number;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
  image: string;
  count?: number;
}
