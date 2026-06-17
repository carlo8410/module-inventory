import 'reflect-metadata';
import { injectable, singleton } from 'tsyringe';
import { ProductRegistrationService } from '../application/ProductRegistrationService';
import { ConstantMessage } from './common/ConstantMessage';
import { ConstantHttpCode } from './common/ConstantHttpCode';

@injectable()
@singleton()
export class ProductController {
  constructor(private readonly service: ProductRegistrationService) {}

  async processProductRegistration(event: any): Promise<{ statusCode: number; body: string }> {
    try {
      await this.service.register(event);
      return {
        statusCode: ConstantHttpCode.SUCCESS,
        body: JSON.stringify({ message: ConstantMessage.PRODUCT_REGISTERED_SUCCESSFULLY }),
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : ConstantMessage.INTERNAL_ERROR;
      return {
        statusCode: ConstantHttpCode.INTERNAL_SERVER_ERROR,
        body: JSON.stringify({ message }),
      };
    }
  }
}
