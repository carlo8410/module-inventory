import { Product } from './Product';

export interface IProductRepository {
  save(product: Product): Promise<void>;
  findBySku(sku: string): Promise<Product | null>;
}
