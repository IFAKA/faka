import { useState } from "react"
import { Body, EasterEgg, Footer, Navbar } from "./components"

function App() {
  const [isEasterEgg, setEasterEgg] = useState(false)
  const open = () => setEasterEgg(true)
  return (
    <>
      {!isEasterEgg
        ? (
          <>
            <Navbar open={open} />
            <Body />
            <Footer />
          </>
        ) : <EasterEgg />
      }
    </>
  )
}

export default App
