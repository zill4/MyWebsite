import { Header } from '../../Components/BasePage/Header'
import { Body } from '../../Components/BasePage/Body'
import { Footer } from '../../Components/BasePage/Footer'
import { Carousel } from '../../Components/Carousel'
import me from '../../assets/me.jpg'
import warlok from '../../assets/warlok_color.png'
import bixby from '../../assets/bixby.jpg'
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
    <div className="m-10 p-10">
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
                className="h-48 rounded-full shadow-lg opacity-90 object-cover "
              />
              <div className="ml-4 col-start-2 font-semibold text-2xl mt-10 italic">
                "Hi welcome to my website, check out what I'm working on"
                <p className="p-2 ml-1 my-2 text-lg font-semibold w-96 not-italic font-mono text-left indent-10">
                  Currently I'm focused on content creation, game development,
                  and web development. Above are some of my game dev and
                  streaming content. Below I list what I've been working on for
                  the past few years.
                </p>
              </div>
            </div>
          </div>
          {/* transition-width delay-500 duration-500 ease-in-out hover:w-80 */}
          <div className="col-start-6  col-span-2  my-12 ">
            <div className="text-xl font-semibold font-mono">
              Tech I'm focused on...
              <div className="group bg-slate-400  rounded-md w-32 p-1  my-6 mb-10 transition-width delay-300 duration-500 ease-in-out  hover:w-80">
                <FontAwesomeIcon
                  icon={faUnity}
                  className="text-white h-16 mx-2"
                />

                <div
                  className={
                    'transition-height delay-300 duration-500 ease-in-out h-0 group-hover:h-96 '
                  }>
                  <div className="transition group-hover:delay-500 eas-in duration-500 opacity-0 group-hover:opacity-90 group-hover:visible invisible text-white p-2">
                    I've used Unity in the past for small projects and
                    hackathons, but in 2022 I'm looking to spend more time with
                    the engine. I'm exceptionally curious about building plugins
                    for allowing interconnectivity of game objects between games
                    built with Unity. I.E. taking a hat model from one game and
                    sending it to another game.
                  </div>
                </div>
              </div>
              <div className="group bg-slate-400  rounded-md w-56 p-1 my-10 mt-6  transition-width delay-300 duration-500 ease-in-out hover:w-80 ">
                <FontAwesomeIcon
                  icon={faPython}
                  className="text-white h-16 mx-2 "
                />
                <div
                  className={
                    'transition-height delay-300 duration-500 ease-in-out h-0  group-hover:h-96 '
                  }>
                  <div className="transition group-hover:delay-500 eas-in duration-500 opacity-0 group-hover:opacity-90  group-hover:visible invisible text-white p-2">
                    <p>
                      Python is great, I use it mostly for backend development
                      and coding challenges. Here are some projects using
                      Python.
                    </p>
                    <a
                      href="https://github.com/zill4/SocialEye"
                      className="underline text-sm text-blue-200">
                      Social Eye : WebScraper and REST API
                    </a>
                    <a
                      href="https://github.com/zill4/RC_Pythone"
                      className="underline text-sm text-blue-200">
                      RingCentral Python data sentiment analysis tool.
                    </a>
                  </div>
                </div>
              </div>
              <div className="group bg-slate-400 rounded-md w-80 p-1 my-2 mt-6  transition-width delay-300 duration-500 ease-in-out hover:w-96 ">
                <FontAwesomeIcon
                  icon={faReact}
                  className="text-white h-16 mx-2 "
                />
                <div
                  className={
                    'transition-height delay-300 duration-500 ease-in-out h-1 group-hover:h-152 '
                  }>
                  <div className="transition group-hover:delay-500 eas-in duration-500 opacity-0 group-hover:opacity-90  group-hover:visible invisible text-white p-2">
                    <p>
                      React has been the primary framework I've been using for
                      the past year. Currently at Shotcall and with this website
                      it is the main framework I use for development. Its very
                      powerful and makes development much easier. Here are some
                      projects using react.
                    </p>
                    <ul>
                      <li>
                        <a
                          href="https://github.com/zill4/SquidGameSimulator"
                          className="underline text-sm text-red">
                          🦑🕹️ Simulator : Simulates a squid game built with
                          NodeJS and React.
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/zill4/Warlokr"
                          className="underline text-sm text-green-700">
                          Warlok helps content-creators connect with fans and
                          share content. Built with React, TailwindCSS, and
                          NextJS hosted on Firebase. visit: http://warlok.net
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/zill4/SocialEye-YouTube-Search"
                          className="underline text-sm text-blue-500">
                          SocialeEye youtube Search is basically just a
                          searching tool for looking through YouTube channels
                          and gathering analytics. visit: https://socialeye.net
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/zill4/Ethereum_BlockChain_Todolist"
                          className="underline text-sm text-white">
                          Todo-list built with Truffle on Ethereum network.
                        </a>
                      </li>
                    </ul>

                    {/* <a
                      href="https://github.com/zill4/42SiliconValley-Camagru"
                      className="underline text-sm text-blue-200">
                      Webcam test application built at 42 : did not finish
                    </a> */}
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
                  At Shotcall I assist with the frontend development of Shotcall
                  2.0. We are steadily inviting creators and fans to join
                  Shotcall 2.0 as the team and I roll out new features week by
                  week. Built using React with TailwindCSS.
                </p>
              </div>
            </div>
            <div className="flex my-4">
              <div className="ml-4 col-start-2 font-semibold text-2xl mt-10  text-center">
                Warlok
                <p className="p-2 ml-1 my-2 text-lg font-semibold w-96 not-italic font-mono text-left indent-10">
                  Warlok helps content creators connect with businesses, other
                  creators, and fans by providing a common place for all three
                  to communicate and share. Currently allows users to create a
                  profile with links to socials and YouTube videos, a bio, and
                  profile picture. Next to be built is a public scheduling tool
                  for creators to get the most out of their content releases and
                  streams. Built using NextJS hosted on Firebase using cloud
                  functions and styled with TailwindCSS.
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
                src={bixby}
                alt="Samsung Bixby"
                className="h-48 rounded-full shadow-lg opacity-90 place-self-center"
              />
              <div className="ml-4 col-start-2 font-semibold text-2xl mt-10   text-center">
                Samsung
                <p className="p-2 ml-1 my-2 text-lg font-semibold w-96 not-italic font-mono text-left indent-10">
                  At Samsung I helped populate the Bixby Marketplace from
                  initial Capsule count of less than 20 live Capsules to over
                  150, over 700% growth, in less than 6-months. Built sample
                  projects for potential developers, content creators, and small
                  businesses for partnerships to populate the Bixby Marketplace.
                  Utilized YouTube API for targeting potential content creator
                  partnerships to bypass YouTube recommendations given during
                  research.
                </p>
              </div>
            </div>
            <div className="flex my-4">
              <div className="ml-4 col-start-2 font-semibold text-2xl mt-10  text-center">
                42 Silicon Valley
                <p className="p-2 ml-1 my-2 text-lg font-semibold w-96 not-italic font-mono text-left indent-10">
                  42 Silicon Valley was an innovative coding school in Fremont,
                  CA. To attend I need to complete a month long bootcamp
                  totaling in over 100 hours a week of studying 7-days a week.
                  After completing the bootcamp and getting accepted into the
                  school, I lived on campus and studying primarily C. Every week
                  we would take coding exams, and finish solo and group
                  projects, along with optional events that were either a
                  hackathon, volunteer work, or a mico-bootcamp for another
                  lanuage, like C# or PHP.
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
          <div className="col-start-6  col-span-2 my-12 ">
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
            <div className="col-start-4  col-span-4  mt-12">
              <SocialsPanel />
            </div>
          </div>
        </div>
      </Body>
      {/* 
      <Footer>Footer Child</Footer> */}
    </div>
  )
}
