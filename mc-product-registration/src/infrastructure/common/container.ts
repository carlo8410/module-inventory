import 'reflect-metadata';
import { container } from 'tsyringe';
import { InMemoryProductRepository } from '../InMemoryProductRepository';
import { ProductRegistrationService } from '../../application/ProductRegistrationService';

import { PRODUCT_REPOSITORY_TOKEN } from './tokens';

// Registro de dependencias
container.registerSingleton<InMemoryProductRepository>(
  PRODUCT_REPOSITORY_TOKEN,
  InMemoryProductRepository,
);

container.registerSingleton<ProductRegistrationService>(
  ProductRegistrationService,
  ProductRegistrationService,
);

export { container };
