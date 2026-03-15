# language: es
@inventario @notificaciones
Característica: Alerta de Stock Mínimo
  Como Comprador
  Quiero ser notificado cuando un producto llegue a su límite mínimo
  Para gestionar el reabastecimiento a tiempo

  Escenario: Activación de umbral de stock mínimo
    Dado que el producto "Disco SSD" tiene un stock mínimo configurado de "5" unidades
    Y su stock actual es de "6" unidades
    Cuando se registra una salida de "2" unidades
    Entonces el stock resultante debe ser "4" unidades
    Y el sistema debe marcar el producto con una alerta de "Reposición Necesaria"
