import { PageProps } from '../../Models/Util'

export const Footer: React.FC<PageProps> = ({ title, children }) => {
  return (
    <footer className="h-20 rounded-md bg-gray-500">
      <div className="flex text-white place-content-center">{children}</div>
    </footer>
  )
}
