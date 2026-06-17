import { Product } from '@/domain/Product';
import { v4 as uuidv4 } from 'uuid';

describe('Product Entity', () => {
  it('should create a product with correct properties', () => {
    const product = new Product(uuidv4(), 'Test Product', 'SKU-001', 10.5);
    expect(product.nombre).toBe('Test Product');
    expect(product.sku).toBe('SKU-001');
    expect(product.precio).toBe(10.5);
  });
});
