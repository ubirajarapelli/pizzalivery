import { Layout } from "../../components/layout/Layout";
import { Button } from "../../components/button/Button"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes";

export default function Sizes() {
  const navigate = useNavigate()

  const sizeOptions = [
    {
      id: 10,
      value: 'large',
      text: 'Grande'
    },
    {
      id: 11,
      value: 'large-half',
      text: 'Grande 2 sabores'
    },
    {
      id: 12,
      value: 'mid',
      text: 'Média'
    },
    {
      id: 13,
      value: 'mid-half',
      text: 'Média 2 sabores'
    },
    {
      id: 14,
      value: 'tiny',
      text: 'Broto'
    },
    {
      id: 15,
      value: 'tiny-half',
      text: 'Broto 2 sabores'
    }
  ]

  const [size, setSize] = useState("")

  const handleChange = (event) => {
    setSize(event.target.id)
  }

  const handleBack = () => {
    navigate(routes.home)
  }

  const handleNext = () => {
    navigate(routes.pizzaFlavour)
  }

  return (
    <Layout>
      <h1>Escolha o tamanho da sua pizza</h1>
      <section>
        {sizeOptions.map(({id, value, text}) => (
          <article key={id}>
            <input type="radio" id={value} name="sizes" onChange={handleChange}/>
            <label htmlFor={value}>{text}</label>
          </article>
        ))}
      </section>
      <div>
        <Button inverse="inverse" onClick={handleBack}>Voltar</Button>
        <Button onClick={handleNext}>Escolha o Sabor</Button>
      </div>
    </Layout>
  )
}
