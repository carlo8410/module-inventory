import { IProductRepository } from './IProductRepository';

export class InventoryService {
  constructor(private readonly repository: IProductRepository) {}

  public async getStockAlerts(): Promise<string[]> {
    const products = await this.repository.findAll();
    return products.filter((p) => p.isReplenishmentNeeded()).map((p) => p.sku);
  }

  public async registerMovement(sku: string, quantity: number): Promise<void> {
    const product = await this.repository.findBySku(sku);
    if (!product) {
      throw new Error(`Producto con SKU ${sku} no encontrado`);
    }
    product.updateStock(quantity);
    await this.repository.save(product);
  }
}
