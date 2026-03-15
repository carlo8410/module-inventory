import { Given, Then } from '@cucumber/cucumber';

Given(
  'que el producto {string} tiene un stock mínimo configurado de {string} unidades',
  async (nombre: string, minimo: string) => {
    throw new Error('PENDING: Configurar el umbral de stock mínimo en la entidad de Dominio');
  },
);

Then('el sistema debe marcar el producto con una alerta de {string}', async (mensaje: string) => {
  throw new Error('PENDING: Validar que el sistema reconozca el estado de reposición');
});
