import 'reflect-metadata';
import { inject, injectable, singleton } from 'tsyringe';
import { IProductRepository } from '../domain/interfaces/IProductRepository';
import { Product } from '../domain/Product';
import { v4 as uuidv4 } from 'uuid';
import { PRODUCT_REPOSITORY_TOKEN } from '../infrastructure/common/tokens';

@injectable()
@singleton()
export class ProductRegistrationService {
  constructor(
    @inject(PRODUCT_REPOSITORY_TOKEN) private readonly productRepository: IProductRepository,
  ) {}

  async register(productData: { nombre: string; sku: string; precio: number }): Promise<void> {
    const existingProduct = await this.productRepository.findBySku(productData.sku);
    if (existingProduct) {
      throw new Error(`Product with SKU ${productData.sku} already exists`);
    }

    const product = new Product(uuidv4(), productData.nombre, productData.sku, productData.precio);
    await this.productRepository.save(product);
  }
}
