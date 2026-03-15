# language: es
@inventario
Característica: Registro de nuevos productos

  Escenario: Registro exitoso de un producto único
    Dado que el SKU "TS-REF-01" no existe en el sistema
    Cuando intento registrar el siguiente producto:
      | nombre      | sku       | precio |
      | Teclado Mec | TS-REF-01 |  75.50 |
    Entonces el registro debe ser confirmado
    Y el producto "Teclado Mec" debe existir en el repositorio
