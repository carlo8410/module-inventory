# language: es
@inventario @movimientos
Característica: Registro de Salida de Mercancía
  Como Vendedor
  Quiero registrar la salida de productos
  Para mantener el inventario sincronizado con las ventas

  Escenario: Salida exitosa de producto
    Dado que el producto con SKU "MOU-99" tiene un stock actual de "20" unidades
    Cuando registro una salida de "3" unidades para el SKU "MOU-99"
    Entonces el nuevo stock del producto debe ser "17" unidades

  Escenario: Intento de salida superior al stock disponible
    Dado que el producto con SKU "MOU-99" tiene un stock actual de "5" unidades
    Cuando intento registrar una salida de "10" unidades para el SKU "MOU-99"
    Entonces el sistema debe denegar la operación por "Stock insuficiente"
    Y el stock debe permanecer en "5" unidades
