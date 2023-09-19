import { useNavigate } from "react-router-dom"
import { Button } from "../../components/button/Button"
import { Layout } from "../../components/layout/Layout"
import { HomeWrapper } from "./Home.style"

export default function Home() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/pedido/escolha-o-tamanho")
  }

  return (
    <Layout>
      <HomeWrapper>
        <Button onClick={handleClick}>Iniciar pedido</Button>
      </HomeWrapper>
    </Layout>
  )
}
