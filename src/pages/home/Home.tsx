import { useNavigate } from "react-router-dom"
import { Button } from "../../components/button/Button"
import { Layout } from "../../components/layout/Layout"
import { HomeWrapper } from "./Home.style"
import { routes } from "../../routes"


export default function Home() {
  const navegate = useNavigate()

  const handleClick = () =>{
    navegate(routes.pizzaSize)
  }
  return (
    <Layout>
      <HomeWrapper>
        <Button onClick={handleClick}>Iniciar pedido</Button>
      </HomeWrapper>
    </Layout>
  )
}
