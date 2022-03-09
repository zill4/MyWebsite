import { Footer } from './Components/Footer'
import { Body } from './Components/Body'
import { Header } from './Components/Header'

export const Home = () => {
  return (
    <div className="bg-white">
      <header>
        <Header />
      </header>

      <main>
        <Body />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
