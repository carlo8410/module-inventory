import { Given, When, Then } from '@cucumber/cucumber';

Given(
  'que el producto con SKU {string} tiene un stock actual de {string} unidades',
  async (sku: string, stock: string) => {
    throw new Error('PENDING: Inicializar estado del producto en el repositorio de pruebas');
  },
);

Given('su stock actual es de {string} unidades', async (stock: string) => {
  throw new Error('PENDING: Inicializar stock actual');
});

Then('el nuevo stock del producto debe ser {string} unidades', (stockEsperado: string) => {
  throw new Error('PENDING: Consultar repositorio y comparar stock final');
});

When('se registra una salida de {string} unidades', async function (cantidad: string) {
  throw new Error('PENDING: Registrar salida de unidades');
});

Then('el stock resultante debe ser {string} unidades', async function (stockEsperado: string) {
  throw new Error('PENDING: Verificar stock resultante');
});
