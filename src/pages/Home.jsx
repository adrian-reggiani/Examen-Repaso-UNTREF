import { useNavigate } from "react-router-dom";
import CiudadSelector from "../components/CiudadSelector"
import useHistorial from "../hooks/useHistorial";
import Historial from "../components/Historial";



const Home = () => {
  const navigate = useNavigate()
  const {agregarConsulta} = useHistorial()
  // Función que manejará el envío de la ciudad seleccionada
  const handleSeleccionarCiudad = (ciudad) => {
    // Navegar a la página de clima con el ID de la ciudad seleccionada
    agregarConsulta(ciudad)
    navigate(`/clima/${ciudad.id}`)

  };

  return (
    <div>
      <h1>Consulta de Clima</h1>
      {/* Componente que mostrará el selector de ciudades */}
      <CiudadSelector
        onSeleccionarCiudad = {handleSeleccionarCiudad}
      />
      {/* Aquí va el historial de consultas */}
      <Historial />
    </div>
  );
};

export default Home;
