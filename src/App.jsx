import { Ejercicio01 } from "./components/ejercicio01"
import { Ejercicio2 } from "./components/Ejercicio2"
import { BotonGeneral } from "./components/utils/BotonGeneral"
import { ComponenteBotones } from "./components/utils/ComponenteBotones"
import { BtnCrearCuenta } from "./components/utils/BtnCrearCuenta"
import { BtnInicioSesion } from "./components/utils/BtnInicioSesion"
function App() {

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-2 text-center alert alert-success">
              Hola
            </h1>
          </div>
        </div>
      </div>

      {/* Llamada a componente externo */}
      <Ejercicio01></Ejercicio01>
      <BotonGeneral></BotonGeneral>
      <hr />
      <ComponenteBotones></ComponenteBotones>
      <Ejercicio2></Ejercicio2>
    </>
  )
}

export default App
