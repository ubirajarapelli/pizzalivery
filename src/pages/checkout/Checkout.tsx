import { useContext, useEffect, useState } from "react"
import OrderContext from "../../contexts/OrderContext"
import { useNavigate } from "react-router-dom"
import { Layout } from "../../components/layout/Layout"
import { routes } from "../../routes"

export default function Checkout() {
  const { pizzaOrder } = useContext(OrderContext)
  const navigate = useNavigate()

  const paymentOptions = [
    { id: "20", value: 1, text: "Cartão de crédito" },
    { id: "21", value: 2, text: "Cartão de débito" },
    { id: "22", value: 3, text: "Vale refeição" },
    { id: "23", value: 4, text: "PIX" },
  ]

  const [paymentType, setPaymentType] = useState("")

  const handleChange = (event) => {
    setPaymentType(event.target.value)
  }

  useEffect(() => {
    if (pizzaOrder === undefined) {
      return navigate(routes.pizzaSize)
    }
  }, [])

  return (
    <Layout>
     <h1>Checkout</h1>
     <label htmlFor="payments">Selecione a forma de pagamento</label>
     <select name="payments" id="payments" defaultValue={""} onChange={handleChange}>
      <option disabled value="">Selecione</option>
      {paymentOptions.map(({ id, value, text}) => (
        <option key={id} value={value}>
          {text}
        </option>
      ))}
     </select>
    </Layout>
  ) 
}
