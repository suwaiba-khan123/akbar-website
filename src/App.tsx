import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Products } from "./pages/Products"
import { Contact } from "./pages/Contact"
import './App.css'
import { BrowserRouter,Route, Routes } from "react-router-dom"
import { routeConst } from "./utils/commonConst"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routeConst.home} element={<Home />} />
        <Route path={routeConst.about} element={<About />} />
        <Route path={routeConst.products} element={<Products />} />
        <Route path={routeConst.contact} element={<Contact />} />
      </Routes>
    </BrowserRouter>                                                                                                                                                                                                                                                                                                           
  )
}

export default App                                                      
