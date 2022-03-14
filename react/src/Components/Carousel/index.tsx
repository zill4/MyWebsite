import { CarouselCard } from './CarouselCard'
import stream from '../../assets/Stream.png'
import unity from '../../assets/unity.png'
import unreal from '../../assets/unreal.png'

/* Will add later
https://leetcode.com/zill4/
https://www.hackerrank.com/zill4777
https://stackoverflow.com/users/5680330/justin-crisp
https://medium.com/@justcrisp
*/

const testObjs = [
  {
    title: 'Zill4 Twitch Hearthstone stream',
    description: 'Lots of fun playing Paladin.',
    link: 'https://clips.twitch.tv/embed?clip=FineCrazyPigeonTakeNRG-XcD_YZYXuQ5Y-tAA&parent=crispcode.io',
    img: stream,
  },
  {
    title: 'Unity rpg project',
    description: 'Unity is great for making games quick and easily.',
    link: 'https://www.youtube.com/embed/reDf1A04kEw',
    img: unity,
  },
  {
    title: 'Unreal Engine 4 rpg project',
    description: 'Unreal is an extremely powerful and fun engine.',
    link: 'https://www.youtube.com/embed/gVugJvbMsq0',
    img: unreal,
  },
]

export const Carousel = () => {
  return (
    <div className="grid grid-cols-3">
      {testObjs.map((obj, i) => (
        <div className="place-self-center text-center">
          <CarouselCard
            classes={i % 2 === 0 ? 'h-36 justify-center ' : 'h-52'}
            CardInfo={obj}
            link={obj.link}
          />
        </div>
      ))}
    </div>
  )
}
