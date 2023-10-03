import { useNavigate } from "react-router-dom"
import { routes } from "../../routes"
import { Button } from "../button/Button"
import { Logo } from "../logo/Logo"
import { ElementHeader, HeaderContainer } from "./Header.style"

export const Header = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate(routes.login)
  }

  return (
    <ElementHeader>
      <HeaderContainer>
        <Logo />
        <Button onClick={handleLogin}>Login</Button>
      </HeaderContainer>
    </ElementHeader>
  )
}
