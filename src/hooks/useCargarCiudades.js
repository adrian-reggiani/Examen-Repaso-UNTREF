import { useState, useEffect } from 'react';

const useCargarCiudades = () => {

  const [ciudades, setCiudades] = useState([]);

  useEffect(() => {
    // Aquí deben cargar las ciudades desde el archivo data.json
    fetch('/datos.json')
      .then(response => response.json())
      .then(datos => setCiudades(datos.ciudades))
  }, []);
  return ciudades;  // Retornamos las ciudades cargadas
};

export default useCargarCiudades;
