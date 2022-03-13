import { PageProps } from '../../Models/Util'

export const Body: React.FC<PageProps> = ({ title, children }) => {
  return <main className="bg-gray-300 min-h-screen  w-full">{children}</main>
}
