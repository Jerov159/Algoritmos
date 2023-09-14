// Array para mantener un registro de los productos seleccionados
const carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(producto, cantidad) {
  const productoEnCarrito = carrito.find((item) => item.producto === producto);

  if (productoEnCarrito) {
    productoEnCarrito.cantidad += cantidad;
  } else {
    carrito.push({ producto, cantidad });
  }

  console.log(`${cantidad} ${producto.nombre}(s) agregado(s) al carrito.`);
}

// Función para calcular el subtotal de un producto
function calcularSubtotal(producto, cantidad) {
  return producto.precio * cantidad;
}

// Función para calcular el total de la compra
function calcularTotal() {
  let total = 0;
  carrito.forEach((item) => {
    total += calcularSubtotal(item.producto, item.cantidad);
  });
  return total;
}

// Ejemplo de uso
const producto1 = { nombre: "Producto 1", precio: 20.0 };
const producto2 = { nombre: "Producto 2", precio: 15.0 };

agregarAlCarrito(producto1, 2);
agregarAlCarrito(producto2, 3);

console.log("Carrito de Compras:");
carrito.forEach((item) => {
  const subtotal = calcularSubtotal(item.producto, item.cantidad);
  console.log(`${item.producto.nombre} x${item.cantidad} - Subtotal: $${subtotal}`);
});

console.log(`Total de la compra: $${calcularTotal()}`);
