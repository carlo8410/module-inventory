import 'reflect-metadata';
import { inject, injectable, singleton } from 'tsyringe';
import { ProductRegistrationService } from '../application/ProductRegistrationService';
import { ConstantMessage } from './common/ConstantMessage';
import { ConstantHttpCode } from './common/ConstantHttpCode';

@injectable()
@singleton()
export class ProductController {
  constructor(
    @inject(ProductRegistrationService) private readonly service: ProductRegistrationService,
  ) {}

  async processProductRegistration(event: unknown): Promise<{ statusCode: number; body: string }> {
    try {
      const productData = event as { nombre: string; sku: string; precio: number };
      console.log('Product registration request received:', JSON.stringify(productData));
      await this.service.register(productData);
      return {
        statusCode: ConstantHttpCode.SUCCESS,
        body: JSON.stringify({
          message: ConstantMessage.PRODUCT_REGISTERED_SUCCESSFULLY,
          statuStatusCode: ConstantHttpCode.SUCCESS,
        }),
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : ConstantMessage.INTERNAL_ERROR;
      return {
        statusCode: ConstantHttpCode.INTERNAL_SERVER_ERROR,
        body: JSON.stringify({
          message,
          statuStatusCode: ConstantHttpCode.INTERNAL_SERVER_ERROR,
        }),
      };
    }
  }
}
