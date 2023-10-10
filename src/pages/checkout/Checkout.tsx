import { useContext, useEffect, useState } from "react"
import OrderContext from "../../contexts/OrderContext"
import { useNavigate } from "react-router-dom"
import { Layout } from "../../components/layout/Layout"
import { routes } from "../../routes"
import { convertToCurrency } from "../../helpers/convertToCurrency"
import { Title } from "../../components/title/Title"
import { Button } from "../../components/button/Button"
import {
  CheckoutAction,
  CheckoutItem,
  CheckoutItemFlex,
  PaymentMethodGroup,
} from "./Checkout.style"

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
  const [isDisabled, setIsDisabled] = useState("")

  const handleChange = (event) => {
    setPaymentType(event.target.value)
  }

  const getPaymentOptionType = (paymentType: number) => {
    if (!paymentType) return

    const filteredValue = paymentOptions.filter(
      (payment) => payment.value === paymentType
    )

    return filteredValue[0].value
  }

  const handleClick = () => {
    alert("Pedido feito")
  }

  useEffect(() => {
    if (pizzaOrder === undefined) {
      return navigate(routes.pizzaSize)
    }
  }, [])

  // ?. nullish -- pode não existir, mas evita a quebra da página. Apresenta um valor nulo, caso não exista

  return (
    <Layout>
      <Title tabIndex={0}>Checkout</Title>
      <CheckoutItem>
        <h2>Items</h2>
        <CheckoutItemFlex>
          <p>
            {pizzaOrder?.item.name} - {pizzaOrder?.item.size}
          </p>
          <p>
            {convertToCurrency(pizzaOrder?.item.value)}
          </p>
        </CheckoutItemFlex>
      </CheckoutItem>
      <CheckoutItem>
        <h2>Forma de Pagamento</h2>
        <CheckoutItemFlex>
          <PaymentMethodGroup>
            <label htmlFor="payments">Selecione a forma de pagamento</label>
            <select name="payments" id="payments" defaultValue={""} onChange={handleChange}>
              <option disabled value="">Selecione</option>
                {paymentOptions.map(({ id, value, text}) => (
                <option key={id} value={value}>
                  {text}
                </option>
              ))}
            </select>
          </PaymentMethodGroup>
          <p>{getPaymentOptionType(Number(paymentType))}</p>
        </CheckoutItemFlex>
      </CheckoutItem>
      <CheckoutItem>
        <CheckoutItemFlex>
          <h2>Total do pedido</h2>
          <p>{convertToCurrency(pizzaOrder?.total)}</p>
        </CheckoutItemFlex>
      </CheckoutItem>
      <CheckoutAction>
        <Button onClick={handleClick} disabled={!Boolean(paymentType)}>Fazer pedido</Button>
      </CheckoutAction>
    </Layout>
  ) 
}
