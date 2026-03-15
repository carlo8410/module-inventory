import { IProductRepository } from '@/domain/IProductRepository';
import { Product } from '@/domain/Product';

export class InMemoryProductRepository implements IProductRepository {
  private products: Map<string, Product> = new Map();

  async save(product: Product): Promise<void> {
    this.products.set(product.sku, product);
  }

  async findBySku(sku: string): Promise<Product | null> {
    return this.products.get(sku) || null;
  }

  async findAll(): Promise<Product[]> {
    return Array.from(this.products.values());
  }
}
