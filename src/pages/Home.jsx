import { useNavigate } from "react-router-dom";
import CiudadSelector from "../components/CiudadSelector"



const Home = () => {
  const navigate = useNavigate()
  // Función que manejará el envío de la ciudad seleccionada
  const handleSeleccionarCiudad = (idCiudad) => {
    // Navegar a la página de clima con el ID de la ciudad seleccionada
  };

  return (
    <div>
      <h1>Consulta de Clima</h1>
      {/* Componente que mostrará el selector de ciudades */}
      <CiudadSelector
        onSeleccionarCiudad = {handleSeleccionarCiudad}
      />
      {/* Aquí va el historial de consultas */}
    </div>
  );
};

export default Home;
