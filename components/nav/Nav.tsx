import Link from 'next/link'
import { 
  MenuIcon, XIcon, HomeIcon, LogoutIcon, BookOpenIcon, PuzzleIcon
} from '@heroicons/react/outline'

export default function Nav() {
  return (
    <>
      <div className="top-logo bg-white border-b border-b-gray-300 flex justify-between p-4 items-center">
        <span className="font-bold">WORDY APP!</span>
        <label className="menu-icon cursor-pointer" htmlFor="menu-toggle">
          <MenuIcon className="h-6 w-6 text-gray-800"/>
        </label>
      </div>
      <input type="checkbox" id="menu-toggle" className="hidden peer" />
      <div className="main-side-menu fixed left-0 top-0 w-0 h-screen bg-black/[0.5] w-full left-[-1000px] peer-checked:left-0 peer-checked:w-full transition-all ease-in-out duration-500">
        <nav className="">
          <div className="top-logo bg-white border-b border-b-gray-300 flex justify-between p-4 items-center">
            <span className="font-bold">WORDY APP!</span>
            <label className="menu-icon-close" htmlFor="menu-toggle">
              <XIcon className="h-6 w-6 text-gray-800 cursor-pointer"/>
            </label>
          </div>
          <ul className="bg-white w-1/2 h-screen">
            <li>
              <Link href="/">
                <a className="flex items-center gap-2 p-4 border-b border-b-gray-300 text-gray-500">
                  <HomeIcon className="h-5 w-5"/> Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/my-words">
                <a className="flex items-center gap-2 p-4 border-b border-b-gray-300 text-gray-500">
                  <BookOpenIcon className="h-5 w-5"/> My Words
                </a>
              </Link>
            </li>
            <li>
              <Link href="/play">
                <a className="flex items-center gap-2 p-4 border-b border-b-gray-300 text-gray-500">
                  <PuzzleIcon className="h-5 w-5"/> Play
                </a>
              </Link>
            </li>
            <li>
              <Link href="/logout">
                <a className="flex items-center gap-2 p-4 border-b border-b-gray-300 text-gray-500">
                  <LogoutIcon className="h-5 w-5"/> Logout
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
