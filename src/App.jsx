import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Clima from "./pages/Clima";

function App() {
  return (
    <div className="App">
      
        {/* Ruta para la página principal */}
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/clima/:id" element={<Clima/>} />
          <Route path="*/" element={"404 - Page Not Found"}/>
        </Routes>
        </BrowserRouter>

        {/* Ruta parametrizada para la página de clima con el ID de la ciudad */}
    </div>
  );
}

export default App;
