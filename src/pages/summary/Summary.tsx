import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/layout/Layout";
import { routes } from "../../routes";
import OrderContext from "../../contexts/OrderContext";
import { Title } from "../../components/title/Title";
import { convertToCurrency } from "../../helpers/convertToCurrency";
import {
  SummaryActionWrapper,
  SummaryAmount,
  SummaryContentWrapper,
  SummaryDescription,
  SummaryDetails,
  SummaryImage,
  SummaryPrice,
  SummaryTitle,
} from "./Summary.style";
import { Button } from "../../components/button/Button";

interface PizzaFlavour {
  name: string;
  image: string;
  price: { [key: string]: number };
}

export default function Summary() {
  const navigate = useNavigate();

  const { pizzaSize, pizzaFlavour, setPizzaOrder } = useContext(OrderContext);
  const [summaryData, setSummaryData] = useState<PizzaFlavour[]>([]);
  const [summaryAmount, setSummaryAmount] = useState<number>(0);

  const handleBack = () => {
    navigate(routes.pizzaFlavour);
  };

  const handleNext = () => {
    const payload = {
      item: {
        name: summaryData.map((item) => item.name).join(", "),
        size: pizzaSize[0].text,
        slices: pizzaSize[0].slices,
        value: summaryAmount,
      },
    };

    setPizzaOrder(payload)
    navigate(routes.checkout)
  }

  useEffect(() => {
    if (!pizzaFlavour || !pizzaSize) {
      return navigate(routes.pizzaFlavour)
    }

    const selectedFlavours = pizzaFlavour.slice(0, 2); // Seleciona no máximo 2 sabores
    const totalAmount = selectedFlavours.reduce((total, flavour) => {
      return total + flavour.price[pizzaSize[0].slices]
    }, 0);

    setSummaryData(selectedFlavours)
    setSummaryAmount(totalAmount)
  }, [pizzaFlavour, pizzaSize])

  return (
    <Layout>
      <Title tabIndex={0}>Resumo do pedido</Title>
      <SummaryContentWrapper>
        {summaryData.map((data, index) => (
          <SummaryDetails key={index}>
            <SummaryImage src={data.image} alt="" />
            <SummaryTitle>{data.name}</SummaryTitle>
            <SummaryDescription>
              {pizzaSize[0].text} ({pizzaSize[0].slices} pedaços)
            </SummaryDescription>
            <SummaryPrice>{convertToCurrency(data.price[pizzaSize[0].slices])}</SummaryPrice>
          </SummaryDetails>
        ))}
        <SummaryAmount>
          <SummaryPrice>{convertToCurrency(summaryAmount)}</SummaryPrice>
        </SummaryAmount>
      </SummaryContentWrapper>
      <SummaryActionWrapper>
        <Button inverse="inverse" onClick={handleBack}>
          Voltar
        </Button>
        <Button onClick={handleNext}>Ir para o pagamento</Button>
      </SummaryActionWrapper>
    </Layout>
  )
}
