import { PageProps } from '../../Models/Util'

export const Header: React.FC<PageProps> = ({ title, children }) => {
  return (
    <header className="flex align-middle justify-center rounded-md bg-gray-400 w-full">
      {children}
    </header>
  )
}
