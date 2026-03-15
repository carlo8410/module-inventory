# language: es
@inventario @lectura
Característica: Visualización de Existencias
  Como Vendedor o Administrador
  Quiero ver la lista de productos y su stock actual
  Para conocer la disponibilidad de artículos en tiempo real

  Escenario: Búsqueda de producto por SKU específico
    Dado que el catálogo cuenta con los siguientes productos:
      | nombre       | sku    | stock |
      | Monitor 24   | MON-24 |    15 |
      | Mouse Optico | MOU-OP |    50 |
    Cuando busco el SKU "MON-24"
    Entonces el sistema debe mostrar únicamente el producto "Monitor 24"
    Y debe indicar que tiene "15" unidades disponibles

  Escenario: Visualización de alerta por producto agotado
    Dado que el producto "Teclado Mecánico" tiene un stock de "0" unidades
    Cuando consulto la lista general de inventario
    Entonces el producto "Teclado Mecánico" debe aparecer con un estado de "Sin Stock"
