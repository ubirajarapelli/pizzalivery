import { Footer } from "../footer/Footer"
import { Header } from "../header/Header"
import { ElementMain } from "./Layout.style"

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <ElementMain>{children}</ElementMain>
      <Footer />
    </>
  )
}
