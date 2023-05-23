import { HeaderContainer } from "./styles"

import igniteLogoImg from "../../assets/logo-ignite.svg"

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={igniteLogoImg} alt="Ignite Logo" />
      <h1>Ignite Feed</h1>
    </HeaderContainer>
  )
}
