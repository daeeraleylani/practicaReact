import { BtnCrearCuenta } from "./BtnCrearCuenta";
import { BtnInicioSesion } from "./BtnInicioSesion";
export const ComponenteBotones = () => {
  return (
    <div className="row">
    
        <div className="col-12 d-flex flex-row mb-3">
          <BtnCrearCuenta></BtnCrearCuenta>
          <BtnInicioSesion></BtnInicioSesion>
        </div>
      
    </div>
  );
};
