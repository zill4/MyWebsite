import { Header } from '../../Components/BasePage/Header'
import { Body } from '../../Components/BasePage/Body'
import { Footer } from '../../Components/BasePage/Footer'
import { Carousel } from '../../Components/Carousel'
import me from '../../assets/meee.jpg'
import warlok from '../../assets/warlok_color.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faReact,
  faPython,
  faJsSquare,
  faJava,
  faUnity,
} from '@fortawesome/free-brands-svg-icons'
import { Accordion } from '../../Components/Accordion'
import SocialsPanel from '../../Components/SocialsPanel'

export const Home = () => {
  return (
    <div className="bg-white m-10 p-10">
      <Header>
        <Carousel />
      </Header>

      <Body>
        <div className="grid  grid-cols-8 m-2 p-2">
          <div className="col-start-2 col-span-3 align-middle justify-center">
            <div className="flex my-4">
              <img
                src={me}
                alt="me"
                className="h-48 rounded-full shadow-lg opacity-90 "
              />
              <div className="ml-4 col-start-2 font-semibold text-2xl mt-10 italic">
                "Hi welcome to website, stay awhile and listen..."
                <p className="p-2 ml-1 my-2 text-lg font-semibold w-96 not-italic font-mono text-left indent-10">
                  Here is a story I'm about to tell about three little piggies
                  you know so well Here is a story I'm about to tell about three
                  little piggies you know so wellHere is a story I'm about to
                  tell about three little piggies you know so well
                </p>
              </div>
            </div>
          </div>
          {/* transition-width delay-500 duration-500 ease-in-out hover:w-80 */}
          <div className="col-start-6  col-span-2  my-12">
            <div className="text-xl font-semibold font-mono">
              Tech I'm focused on...
              <div className="group bg-gray-600 rounded-md w-32 p-1  my-6 mb-10 transition-width delay-300 duration-500 ease-in-out  hover:w-80">
                <FontAwesomeIcon
                  icon={faUnity}
                  className="text-white h-16 mx-2"
                />

                <div
                  className={
                    'transition-height delay-300 duration-500 ease-in-out h-0 group-hover:h-36 '
                  }>
                  <div className="transition group-hover:delay-500 eas-in duration-500 opacity-0 group-hover:opacity-90 group-hover:visible invisible">
                    I've been study Unity foreveeeeeeeeeeeeeeeeeeeer
                  </div>
                </div>
              </div>
              <div className="group bg-gray-600 rounded-md w-56 p-1 my-10 mt-6  transition-width delay-300 duration-500 ease-in-out hover:w-80">
                <FontAwesomeIcon
                  icon={faPython}
                  className="text-white h-16 mx-2 "
                />
                <div
                  className={
                    'transition-height delay-300 duration-500 ease-in-out h-0  group-hover:h-36 '
                  }>
                  <div className="transition group-hover:delay-500 eas-in duration-500 opacity-0 group-hover:opacity-90  group-hover:visible invisible">
                    I've been study Unity foreveeeeeeeeeeeeeeeeeeeer
                  </div>
                </div>
              </div>
              <div className="group bg-gray-600 rounded-md w-80 p-1 my-2 mt-6  transition-width delay-300 duration-500 ease-in-out hover:w-96">
                <FontAwesomeIcon
                  icon={faReact}
                  className="text-white h-16 mx-2 "
                />
                <div
                  className={
                    'transition-height delay-300 duration-500 ease-in-out h-1 group-hover:h-36 '
                  }>
                  <div className="transition group-hover:delay-500 eas-in duration-500 opacity-0 group-hover:opacity-90  group-hover:visible invisible">
                    I've been study Unity foreveeeeeeeeeeeeeeeeeeeer
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row-span-2"></div> */}
          <div className="grid grid-rows-2 row-span-2 col-start-1 col-span-4 ml-4 align-middle justify-center">
            <div className="flex my-4">
              <img
                src={
                  'https://pbs.twimg.com/profile_images/1477323067173085189/SA6TkszN_400x400.jpg'
                }
                alt="shotcall"
                className="h-48 rounded-full shadow-lg opacity-90 place-self-center"
              />
              <div className="ml-4 col-start-2 font-semibold text-2xl mt-10  text-center">
                Shotcall
                <p className="p-2 ml-1 my-2 text-lg font-semibold w-96 not-italic font-mono text-left indent-10">
                  Here is a story I'm about to tell about three little piggies
                  you know so well Here is a story I'm about to tell about three
                  little piggies you know so wellHere is a story I'm about to
                  tell about three little piggies you know so well
                </p>
              </div>
            </div>
            <div className="flex my-4">
              <div className="ml-4 col-start-2 font-semibold text-2xl mt-10  text-center">
                Warlok
                <p className="p-2 ml-1 my-2 text-lg font-semibold w-96 not-italic font-mono text-left indent-10">
                  Here is a story I'm about to tell about three little piggies
                  you know so well Here is a story I'm about to tell about three
                  little piggies you know so wellHere is a story I'm about to
                  tell about three little piggies you know so well
                </p>
              </div>
              <img
                src={warlok}
                alt="warlok"
                className="h-48 rounded-full shadow-lg opacity-90 place-self-center w-48"
              />
            </div>
            <div className="flex my-4">
              <img
                src={
                  'https://yt3.ggpht.com/ytc/AKedOLTaeZEqQe5NOmP4A7gRQcgCkUSqhhuuZ7vuSRbhpQ=s900-c-k-c0x00ffffff-no-rj'
                }
                alt="Samsung Developers"
                className="h-48 rounded-full shadow-lg opacity-90 place-self-center"
              />
              <div className="ml-4 col-start-2 font-semibold text-2xl mt-10   text-center">
                Samsung
                <p className="p-2 ml-1 my-2 text-lg font-semibold w-96 not-italic font-mono text-left indent-10">
                  Here is a story I'm about to tell about three little piggies
                  you know so well Here is a story I'm about to tell about three
                  little piggies you know so wellHere is a story I'm about to
                  tell about three little piggies you know so well
                </p>
              </div>
            </div>
            <div className="flex my-4">
              <div className="ml-4 col-start-2 font-semibold text-2xl mt-10  text-center">
                42 Silicon Valley
                <p className="p-2 ml-1 my-2 text-lg font-semibold w-96 not-italic font-mono text-left indent-10">
                  Here is a story I'm about to tell about three little piggies
                  you know so well Here is a story I'm about to tell about three
                  little piggies you know so wellHere is a story I'm about to
                  tell about three little piggies you know so well
                </p>
              </div>
              <img
                src={
                  'https://pbs.twimg.com/profile_images/1146116791292162048/U-u-_3Bh_400x400.png'
                }
                alt="42 Silicon Valley"
                className="h-48 rounded-full shadow-lg opacity-90 place-self-center "
              />
            </div>
          </div>
          <div className="col-start-6  col-span-2  my-12">
            <div className="text-xl font-semibold font-mono">
              Tech I know...
              <Accordion title="Frontend">React Vue Svelte</Accordion>
              <Accordion title="Backend">Flask Django Spring</Accordion>
              <Accordion title="Databases and DevOps">
                MongoDB MySQL AWS Firebase
              </Accordion>
              <Accordion title="Game Development">
                Unity Unreal-Engine 4
              </Accordion>
              <Accordion title="Content Creation">
                PhotoShop Premier-Pro OBS
              </Accordion>
            </div>
          </div>
          <div className="col-start-5 mx-12 col-span-4  my-1">
            <SocialsPanel />
          </div>
        </div>
      </Body>

      <Footer>Footer Child</Footer>
    </div>
  )
}
