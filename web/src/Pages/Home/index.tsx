import { Header } from '../../Components/BasePage/Header'
import { Body } from '../../Components/BasePage/Body'
import { Footer } from '../../Components/BasePage/Footer'
import { Carousel } from '../../Components/Carousel'

export const Home = () => {
  return (
    <div className="bg-white m-10 p-10">
      <Header>
        <Carousel />
      </Header>

      <Body>Body Child</Body>

      <Footer>Footer Child</Footer>
    </div>
  )
}
