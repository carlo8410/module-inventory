import 'reflect-metadata';
import { injectable, singleton } from 'tsyringe';
import { ProductRegistrationService } from '../application/ProductRegistrationService';
import { ConstantMessage } from './common/ConstantMessage';
import { ConstantHttpCode } from './common/ConstantHttpCode';

@injectable()
@singleton()
export class ProductController {
  constructor(private readonly service: ProductRegistrationService) {}

  async processProductRegistration(event: unknown): Promise<{ statusCode: number; body: string }> {
    try {
      const productData = event as { nombre: string; sku: string; precio: number };
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
