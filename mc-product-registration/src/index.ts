import 'reflect-metadata';
import { container } from './infrastructure/common/container';
import { ProductController } from './infrastructure/ProductController';

const controller = container.resolve(ProductController);

export const handler = async (event: any): Promise<{ statusCode: number; body: string }> => {
  return await controller.processProductRegistration(event);
};
