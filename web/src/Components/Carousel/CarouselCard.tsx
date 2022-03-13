import { ICarouselCard } from '../../Models/Util'

type Props = {
  CardInfo: ICarouselCard
  classes?: string
}

export const CarouselCard = (props: Props) => {
  return (
    <div className="m-2 p-2 grid content-center transition  hover:scale-110 ease-in-out  delay-150  duration-300">
      <img
        src={props.CardInfo.img}
        alt={props.CardInfo.title}
        className={` ${props.classes} h-48 rounded-md shadow-lg`}
      />
    </div>
  )
}
