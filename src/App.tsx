import { Body, Footer, Navbar } from "./components"
import { ServiceWorkerModal } from "./config"

const App = () => (
  <>
    <ServiceWorkerModal />
    <Navbar />
    <Body />
    <Footer />
  </>
)

export default App
