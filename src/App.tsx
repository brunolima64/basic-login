import { Route, Routes } from "react-router-dom";

import { ContextProvider } from "./contexts/Context";

import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { RequiredAuth } from "./pages/RequiredAuth";
import { Logado } from "./pages/Logado";
 
export const App = () => {
  return (
    <div>
      <ContextProvider>
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/cadastro" element={<Register />}/>
            <Route path="/logado" element={
            <RequiredAuth>
              <Logado />
            </RequiredAuth>
            }/>
          </Routes>
      </ContextProvider>
    </div>
  )
 }
 export default App;