import { ICarouselCard } from '../../Models/Util'

type Props = {
  CardInfo: ICarouselCard
}

export const CarouselCard = (props: Props) => {
  return (
    <div className="rounded-md bg-gray-700">
      <img
        src={props.CardInfo.img}
        alt={props.CardInfo.title}
        className="h-48"
      />
    </div>
  )
}
