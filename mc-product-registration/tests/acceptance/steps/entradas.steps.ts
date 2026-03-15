import { When, Then } from '@cucumber/cucumber';

When(
  'registro una entrada de {string} unidades para el SKU {string}',
  async (cantidad: string, sku: string) => {
    throw new Error('PENDING: Implementar ejecución del comando de entrada');
  },
);

When(
  'registro una salida de {string} unidades para el SKU {string}',
  async (cantidad: string, sku: string) => {
    throw new Error('PENDING: Implementar ejecución del comando de salida');
  },
);

When(
  'intento registrar una salida de {string} unidades para el SKU {string}',
  async (cantidad: string, sku: string) => {
    throw new Error('PENDING: Implementar intento de salida');
  },
);

Then('el sistema debe denegar la operación por {string}', (mensaje: string) => {
  throw new Error('PENDING: Verificar denegación de operación');
});

Then('el stock debe permanecer en {string} unidades', async (stock: string) => {
  throw new Error('PENDING: Verificar permanencia de stock');
});

Then('debe quedar registrado un movimiento de tipo {string}', (tipoMovimiento: string) => {
  throw new Error('PENDING: Verificar registro de movimiento');
});
