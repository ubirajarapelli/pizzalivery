import { Button } from "../../components/button/Button";
import { Layout } from "../../components/layout/Layout";
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { routes } from "../../routes"
import OrderContext from "../../contexts/OrderContext";

export default function Sizes() {
  const navegate = useNavigate()
  const {pizzaSize, setPizzaSize} = useContext(OrderContext)

  const sizeOptions = [
    {
      id: "10",
      flavours: 1,
      size: 35,
      slices: 8,
      text: "Grande",
    },
    {
      id: "11",
      flavours: 2,
      size: 35,
      slices: 8,
      text: "Grande",
    },
    {
      id: "20",
      flavours: 1,
      size: 28,
      slices: 4,
      text: "Média",
    },
    {
      id: "21",
      flavours: 2,
      size: 28,
      slices: 4,
      text: "Média",
    },
    {
      id: "30",
      flavours: 1,
      size: 18,
      slices: 1,
      text: "Broto",
    },
    {
      id: "31",
      flavours: 2,
      size: 18,
      slices: 1,
      text: "Broto",
    },
  ]
  const [sizeId, setSizeId] = useState("")

  const getPizzaSize = (id:string) => {
    return sizeOptions.filter((option)=> option.id === id)
  }

  const handleChange = (event) =>{
    setSizeId(event.target.value)
  }
  const handleBack = () =>{
    navegate(routes.home)
  }
  const handleNext = () =>{
    const selectedSize = getPizzaSize(sizeId)
    setPizzaSize(selectedSize)
    navegate(routes.pizzaFlavour)
  }

  useEffect(()=>{
    if(!pizzaSize) return

    setSizeId(pizzaSize[0].id)

  },[])


  return (

    <Layout>
      <h1>Escolha o tamanho da pizza</h1>
      <section>
        {sizeOptions.map(({id,size, slices, flavours,text})=>(
          <div key={id}>
           <input type="radio"
           id={id}
           name="sizes"
           onChange={handleChange}
           value={id}
           checked={sizeId===id}
           />
           <label htmlFor={id}>
            {text} - {flavours} sabores
            <span> Pizza com {slices} pedaços e {size}cm</span>
           </label>
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
