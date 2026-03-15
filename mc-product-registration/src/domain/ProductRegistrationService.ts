import { IProductRepository } from './IProductRepository';
import { Product } from './Product';

export class ProductRegistrationService {
  constructor(private readonly productRepository: IProductRepository) {}

  async register(productData: { nombre: string; sku: string; precio: number }): Promise<void> {
    const existingProduct = await this.productRepository.findBySku(productData.sku);
    if (existingProduct) {
      throw new Error(`Product with SKU ${productData.sku} already exists`);
    }

    const product = new Product(productData.nombre, productData.sku, productData.precio);
    await this.productRepository.save(product);
  }
}
