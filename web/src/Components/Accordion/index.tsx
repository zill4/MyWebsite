type Props = {
  title: string
  subContent?: string
}

export const Accordion: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="grid justify-items-center text-white text-md bg-gray-600 rounded-md w-80  my-2">
      {title}
      <div className=" transition-height duration-500 ease-in-out h-8 hover:h-80 grid justify-items-center align-items-middle text-md px-2 my-2 bg-teal-500 w-full">
        {children}
      </div>
    </div>
  )
}
