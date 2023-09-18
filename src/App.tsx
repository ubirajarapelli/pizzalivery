import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Sizes from "./pages/sizes/Sizes"
import Flavours from "./pages/flavours/Flavours"
import Summary from "./pages/summary/Summary"
import Checkout from "./pages/checkout/Checkout"
import Login from "./pages/login/Login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pedido/escolha-o-tamanho" element={<Sizes />} />
        <Route path="/pedido/escolha-o-sabor" element={<Flavours />} />
        <Route path="/pedido/resumo" element={<Summary />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
