import 'reflect-metadata';
import { injectable, singleton } from 'tsyringe';
import { IProductRepository } from '@/domain/interfaces/IProductRepository';
import { Product } from '@/domain/Product';

@injectable()
@singleton()
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

  async clear(): Promise<void> {
    this.products.clear();
  }
}
