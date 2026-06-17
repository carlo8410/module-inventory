import { IProduct } from './interfaces/IProduct';

export class Product implements IProduct {
  constructor(
    public readonly id: string,
    public readonly nombre: string,
    public readonly sku: string,
    public readonly precio: number,
    public stock: number = 0,
    public minStock: number = 0,
  ) {}
}
