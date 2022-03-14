import { Link } from 'react-router-dom'

export const TopNav = () => {
  return (
    <div className="bg-black flex justify-center">
      <nav className="text-white font-bold flex mx-4 space-x-4">
        crispcode.io
        {/* <Link to="/">Home</Link>
        <Link to="about">About</Link> */}
      </nav>
    </div>
  )
}
