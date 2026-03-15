# language: es
@inventario @movimientos
Característica: Registro de Entrada de Mercancía
  Como Almacenista
  Quiero registrar el ingreso de nuevos productos
  Para actualizar el stock tras una compra al proveedor

  Escenario: Incremento exitoso de stock
    Dado que el producto con SKU "LAP-001" tiene un stock actual de "10" unidades
    Cuando registro una entrada de "5" unidades para el SKU "LAP-001"
    Entonces el nuevo stock del producto debe ser "15" unidades
    Y debe quedar registrado un movimiento de tipo "ENTRADA"
