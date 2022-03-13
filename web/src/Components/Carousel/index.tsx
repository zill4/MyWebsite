import { CarouselCard } from './CarouselCard'

const testObjs = [
  {
    title: 'game project',
    description: 'This was coold rpg',
    link: 'www.cool.wtf',
    img: 'https://static3.cbrimages.com/wordpress/wp-content/uploads/2021/02/Bleach-Rukia.jpg',
  },
  {
    title: 'video project',
    description: 'wowow wee woo',
    link: 'www.wow.wtf',
    img: 'https://www.yourpurebredpuppy.com/dogbreeds/photos2-G/german-shepherd-05.jpg',
  },
  {
    title: 'writing project',
    description: 'I wrote a haiku',
    link: 'www.meh.wtf',
    img: 'https://bri-wp-images.s3.amazonaws.com/wp-content/uploads/Ch-2-Declaration-of-Independence-Hero-Image.jpg',
  },
]

export const Carousel = () => {
  return (
    <div className="grid grid-cols-3">
      {testObjs.map((obj, i) => (
        <div className="place-self-center text-center">
          test
          <CarouselCard
            classes={i % 2 === 0 ? 'h-36 justify-center' : 'h-52'}
            CardInfo={obj}
          />
        </div>
      ))}
    </div>
  )
}
