import { Button } from "../../components/button/Button";
import { Layout } from "../../components/layout/Layout";
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { routes } from "../../routes"

export default function Sizes() {
  const navegate = useNavigate()
  const sizeOptions = [
  {
    id: 10,
    value: 'large',
    text: 'Grande',
  },
  {
    id: 11,
    value: 'large-2',
    text: 'Grande 2 sabores',
  },
  {
    id: 20,
    value: 'medium',
    text: 'Média',
  },
  {
    id: 21,
    value: 'medium-2',
    text: 'Média 2 sabores',
  },
  {
    id: 30,
    value: 'small',
    text: 'Broto',
  },
  {
    id: 31,
    value: 'small-2',
    text: 'Broto 2 Sabores',
  },
]

  const [size, setSize] = useState("")

  const handleChange = (event) =>{
    setSize(event.target.id)
  }
  const handleBack = () =>{
    navegate(routes.home)
  }
  const handleNext = () =>{
    navegate(routes.pizzaFlavour)
  }

  return (
    <Layout>
      <h1>Escolha o tamanho da pizza</h1>
      <section>
        {sizeOptions.map(({id,value,text})=>(
          <div key={id}>
           <input type="radio" 
           id={value} 
           name="sizes" 
           onChange={handleChange}
           value={size}
           />
           <label htmlFor={value}>{text}</label>
          </div>
        ))}
      </section>
      <div>
        <Button onClick={handleBack}>Voltar</Button>
        <Button onClick={handleNext}>Escolha o sabor</Button>
      </div>    
    </Layout>
  )
}
