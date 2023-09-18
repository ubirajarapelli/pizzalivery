import { ElementButton } from "./Button.style"

interface ButtonProps {
  children: React.ReactNode
  inverse?: string
  link?: string
}

export const Button = ({ children, inverse, link, ...rest }: ButtonProps) => {
  return (
    <ElementButton inverse={inverse} link={link} {...rest}>
      {children}
    </ElementButton>
  )
}
