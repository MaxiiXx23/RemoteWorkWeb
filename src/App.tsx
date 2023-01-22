import { ThemeProvider } from "styled-components"

import { defaultTheme } from "./styles/themes/defaultTheme"
import { GlobalStyle } from "./styles/global"
import { Home } from "./pages/Home"
import { Header } from "./components/Header"

function App() {

  return (
    <ThemeProvider
      theme={defaultTheme}
    >
      <Header />
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
