import { Before } from '@cucumber/cucumber';
import { container } from '@/infrastructure/common/container';
import { PRODUCT_REPOSITORY_TOKEN } from '@/infrastructure/common/tokens';
import { IProductRepository } from '@/domain/interfaces/IProductRepository';

// Compartimos el mismo repositorio del container para todos los pasos
export const repository = container.resolve<IProductRepository>(PRODUCT_REPOSITORY_TOKEN);

Before(async () => {
  await repository.clear();
});
