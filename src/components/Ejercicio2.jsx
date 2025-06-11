export const Ejercicio2 = () => {
  //logica del componente
  //1. variable /constante
  //2. hooks
  //3. funciones
  const nombreProducto = 'Smart TV 90"';

  function agregarACarrito() {
    console.log("el producto", nombreProducto, "fue agregado al carrito");
  }

  function eliminarDeCarrito() {
    console.log("el producto", nombreProducto, "fue eliminado del carrito");
  }

  return (
    <div className="row mt-2">
      <h2 className="h4 mt-4">Ejercicio 2</h2>
      <hr />
      <div className="col-12 d-flex flex-row offset-3">
        <button onClick={agregarACarrito} className="w-25 btn btn-primary">
          <i class="bi bi-basket"></i>
          <span className="ms-2"></span>Agregar articulo
        </button>
        <button className="w-25 btn btn-danger ms-2" onClick={eliminarDeCarrito}>
          <i class="bi bi-trash"></i>
          <span className="ms-2"></span>Eliminar articulo
        </button>
      </div>
    </div>
  );
};
