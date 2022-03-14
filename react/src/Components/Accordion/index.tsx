type Props = {
  title: string
  subContent?: string
}

// disabling the accordion
export const Accordion: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="grid justify-items-center text-white text-md bg-slate-400 rounded-md w-80  my-2">
      {title}
      <div className="   grid justify-items-center align-items-middle text-md px-2 my-2 bg-teal w-full">
        {children}
      </div>
    </div>
  )
}
