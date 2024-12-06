import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useCargarCiudades from '../hooks/useCargarCiudades';

export default function useClima() {
  const [clima, setClima] = useState(null);
  const { id } = useParams() // Trae el ID que esta en la url

  const ciudades = useCargarCiudades() // Hook personalizado para cargar el JSON Ciudades

  useEffect( () => {
    setClima(ciudades.find(c => c.id === parseInt(id))) // Compara las ciudades con el ID
  
  }, [ciudades])

  return (clima
  )
}
