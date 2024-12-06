
import { useNavigate } from 'react-router-dom';
import ClimaDetalle from '../components/ClimaDetalle';
import useClima from '../hooks/useClima';
import Historial from '../components/Historial';
import useHistorial from '../hooks/useHistorial';

export default function Clima () {
  const clima = useClima()
  const navigate = useNavigate()
  const { limpiarHistorial } = useHistorial()

  const handleBack = () => {
    navigate(-1)
  }

  const handleClear = () =>{
    limpiarHistorial()
  }

  return (
    <div>
      <h1>Clima de la Ciudad {clima ? clima.nombre : "..."}</h1>
      {/* Componente que mostrará los detalles del clima */}
      {clima ? <ClimaDetalle clima={clima} /> : <p>Cargando...</p>}
      <button onClick={handleBack}> Volver Atras </button>
      <button onClick={handleClear}> Limpiar Historial </button>

      {/* Aquí va el historial de consultas */}
      <Historial />
    </div>
  );
};
 

