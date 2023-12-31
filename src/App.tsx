import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { GlobalCSS } from './styles'
import Rotas from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <Header />
      <div className="container">
        <Rotas />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
