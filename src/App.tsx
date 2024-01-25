import { Route, Routes } from "react-router-dom";

import { ContextProvider } from "./contexts/Context";

import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { RequiredAuth } from "./pages/RequiredAuth";
import { Logado } from "./pages/Logado";
import { ThemeContextProvider } from "./contexts/ThemeContext";
 
export const App = () => {
  return (
    <div>
      <ContextProvider>
        <ThemeContextProvider>
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/cadastro" element={<Register />}/>
            <Route path="/logado" element={
            <RequiredAuth>
              <Logado />
            </RequiredAuth>
            }/>
          </Routes>
        </ThemeContextProvider>
      </ContextProvider>
    </div>
  )
 }
 export default App;