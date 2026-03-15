export class Product {
  constructor(
    public readonly nombre: string,
    public readonly sku: string,
    public readonly precio: number,
    public stock: number = 0,
    public minStock: number = 0,
  ) {}

  public isReplenishmentNeeded(): boolean {
    return this.stock < this.minStock;
  }

  public getStatus(): string {
    return this.stock > 0 ? 'Disponible' : 'Sin Stock';
  }

  public updateStock(quantity: number): void {
    if (this.stock + quantity < 0) {
      throw new Error('Stock insuficiente');
    }
    this.stock += quantity;
  }
}
