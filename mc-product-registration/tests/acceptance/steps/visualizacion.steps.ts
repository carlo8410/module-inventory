import { Given, When, Then, DataTable } from '@cucumber/cucumber';

Given('que el catálogo cuenta con los siguientes productos:', async (data: DataTable) => {
  throw new Error('PENDING: Implementar persistencia inicial de productos');
});

When('busco el SKU {string}', async (sku: string) => {
  throw new Error('PENDING: Invocar Query Service de búsqueda por SKU');
});

Then('el sistema debe mostrar únicamente el producto {string}', (nombre: string) => {
  throw new Error('PENDING: Validar que el resultado filtrado coincida con el nombre');
});

Then('debe indicar que tiene {string} unidades disponibles', (cantidad: string) => {
  throw new Error('PENDING: Verificar que el stock en la respuesta sea el esperado');
});

When('consulto la lista general de inventario', async () => {
  throw new Error('PENDING: Consultar lista general');
});

Then(
  'el producto {string} debe aparecer con un estado de {string}',
  (nombre: string, estado: string) => {
    throw new Error('PENDING: Validar lógica de visualización de estados (Agotado/Disponible)');
  },
);

Given(
  'que el producto {string} tiene un stock de {string} unidades',
  async (nombre: string, stock: string) => {
    throw new Error('PENDING: Inicializar stock para producto específico');
  },
);
