import { Layout } from "../../components/layout/Layout"
import { convertToCurrency } from "../../helpers/convertToCurrency"
import { Button } from "../../components/button/Button"
import { useNavigate } from "react-router-dom"
import OrderContext from "../../contexts/OrderContext"
import { useContext, useEffect} from "react"
import { routes } from "../../routes"

export default function Summary() {
  const navigate = useNavigate()

  const { pizzaSize, pizzaFlavour} = useContext (OrderContext)
  // const [summaryData, setSummaryData] = useState({})
  // const [summaryAmount, setSummaryAmount] = useState(0)

  const handleBack = () => {
    navigate (routes.pizzaFlavour)
  }
  
  const handleNext = () => {
    navigate (routes.checkout)
  }

  useEffect(()=> {
    // console.log(pizzaFlavour)
      if (!pizzaFlavour) {
        return navigate (routes.pizzaSize)
      }
      if (!pizzaSize) {
        return navigate (routes.home)
      }
  })
  
  return( 
      <Layout>
        <h1 tabIndex={0}>Resumo do pedido</h1>
        <section>
        <div>
          <img src = {sumarryData.image} alt = ""/>
          <p>{sumaryData.name}</p>
          <p>
            {sumaryData.text} {`(${summaryData.slices})pedaços`}
          </p>
          <p>{convertToCurrency(summaryData.price)}</p>
        </div>
        <div>
          <p>{convertToCurrency(summaryAmount)}</p>
        </div>
        </section>
        <div>
          <Button inverse = "inverse" onClick={handleBack}>
            Voltar
          </Button>
          <Button onClick={handleNext}>Ir para o pagamento</Button>
        </div>
      </Layout>
  )
}
