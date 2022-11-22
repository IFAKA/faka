import { Body, Footer, Navbar } from "./components"

const App = () => (
  <>
    <Navbar />
    <div className="grid place-items-center w-full h-[calc(100vh-96px)] overflow-auto">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 max-w-4xl p-4">
        <Body />
      </div>
    </div>
    <Footer />
  </>
)

export default App
