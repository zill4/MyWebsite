import { PageProps } from '../../Models/Util'

export const Body: React.FC<PageProps> = ({ title, children }) => {
  return (
    <main className="min-h-screen">
      <div className="grid grid-cols-12 bg-gray-300 min-h-screen align-middle content-center">
        {/* <div className="col-span-3">b</div>
        <div className="col-span-3">o</div>
        <div className="col-span-3">d</div>
        <div className="col-span-3">y</div> */}
        {children}
      </div>
    </main>
  )
}
