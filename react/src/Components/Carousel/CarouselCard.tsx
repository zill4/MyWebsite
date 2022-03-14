import { ICarouselCard } from '../../Models/Util'

type Props = {
  CardInfo: ICarouselCard
  link: string
  classes?: string
}

export const CarouselCard = (props: Props) => {
  return (
    <a
      className="m-2 p-2 grid content-center transition  hover:scale-110 ease-in-out  delay-150  duration-300"
      href={props.link}>
      {/* <img
        src={props.CardInfo.img}
        alt={props.CardInfo.title}
        className={` ${props.classes} h-48 rounded-md shadow-lg`}
      /> */}
      <iframe
        className={` ${props.classes} h-48 rounded-md shadow-lg`}
        width="360"
        height="315"
        src={props.link}
        title={props.CardInfo.title}
        scrolling="no"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
    </a>
  )
}
