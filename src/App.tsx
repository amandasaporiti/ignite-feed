import { GlobalStyles } from "./styles/global"
import { Header } from "./components/Header"
import { Feed } from "./components/Feed"

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Feed />
    </>
  )
}
