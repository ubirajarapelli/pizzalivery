import { Button } from "../../components/button/Button"
import { Layout } from "../../components/layout/Layout"
import { HomeWrapper } from "./Home.style"

export default function Home() {
  return (
    <Layout>
      <HomeWrapper>
        <Button>Iniciar pedido</Button>
      </HomeWrapper>
    </Layout>
  )
}
