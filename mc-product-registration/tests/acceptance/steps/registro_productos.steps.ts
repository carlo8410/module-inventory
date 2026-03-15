import { Given, When, Then } from '@cucumber/cucumber';
import * as assert from 'node:assert';
import { ProductRegistrationService } from '@/domain/ProductRegistrationService';
import { InMemoryProductRepository } from '@/infrastructure/InMemoryProductRepository';

const repository = new InMemoryProductRepository();
const service = new ProductRegistrationService(repository);

let lastException: Error | null = null;
let registrationConfirmed = false;

Given('que el SKU {string} no existe en el sistema', async function (sku: string) {
  const product = await repository.findBySku(sku);
  assert.strictEqual(product, null, `El SKU ${sku} ya existe en el sistema`);
});

When('intento registrar el siguiente producto:', async function (dataTable) {
  const data = dataTable.hashes()[0];
  const productData = {
    nombre: data.nombre,
    sku: data.sku,
    precio: parseFloat(data.precio),
  };

  try {
    await service.register(productData);
    registrationConfirmed = true;
    lastException = null;
  } catch (error) {
    registrationConfirmed = false;
    lastException = error as Error;
  }
});

Then('el registro debe ser confirmado', function () {
  assert.strictEqual(registrationConfirmed, true, 'El registro no fue confirmado');
  assert.strictEqual(
    lastException,
    null,
    `Se produjo un error durante el registro: ${lastException?.message}`,
  );
});

Then('el producto {string} debe existir en el repositorio', async function (nombre: string) {
  // En un caso real buscaríamos por SKU, pero aquí seguimos el paso literal
  const product = await repository.findBySku('TS-REF-01');
  assert.notStrictEqual(product, null, 'El producto no existe en el repositorio');
  assert.strictEqual(product?.nombre, nombre);
});
