import { Link } from 'react-router-dom'

export const TopNav = () => {
  return (
    <div className="bg-black flex justify-end">
      <nav className="text-white font-semibold flex mx-4 space-x-4">
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
      </nav>
    </div>
  )
}
