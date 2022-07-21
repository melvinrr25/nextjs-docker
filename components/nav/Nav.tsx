import Link from 'next/link'
import { 
  MenuIcon, XIcon, HomeIcon, LogoutIcon, BookOpenIcon, PuzzleIcon
} from '@heroicons/react/outline'

export default function Nav() {
  return (
    <div>
      <div className="top-logo h-16 bg-white border-b border-b-gray-200 flex justify-between p-4 items-center">
        <span className="font-bold">WORDY APP!</span>
        <label className="menu-icon cursor-pointer md:hidden" htmlFor="menu-toggle">
          <MenuIcon className="h-6 w-6 text-gray-800"/>
        </label>
      </div>
      <input type="checkbox" id="menu-toggle" className="hidden peer" />
      <div className="main-side-menu fixed left-0 top-0 w-0 h-screen bg-black/[0.5] left-[-5000px] peer-checked:left-0 peer-checked:w-full transition-all ease-in-out duration-500 md:left-0 md:w-[200px] md:relative">
        <nav className="">
          <div className="top-logo h-16 bg-white border-b border-b-gray-200 flex justify-between p-4 items-center md:hidden">
            <span className="font-bold">WORDY APP!</span>
            <label className="menu-icon-close" htmlFor="menu-toggle">
              <XIcon className="h-6 w-6 text-gray-800 cursor-pointer"/>
            </label>
          </div>
          <ul className="bg-white w-1/2 h-screen md:w-[200px] border-r border-r-gray-200">
            <li>
              <Link href="/">
                <a className="flex items-center gap-2 p-4 border-b border-b-gray-200 text-gray-500 hover:text-gray-900">
                  <HomeIcon className="h-5 w-5"/> Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/my-words">
                <a className="flex items-center gap-2 p-4 border-b border-b-gray-200 text-gray-500 hover:text-gray-900">
                  <BookOpenIcon className="h-5 w-5"/> My Words
                </a>
              </Link>
            </li>
            <li>
              <Link href="/play">
                <a className="flex items-center gap-2 p-4 border-b border-b-gray-200 text-gray-500 hover:text-gray-900">
                  <PuzzleIcon className="h-5 w-5"/> Play
                </a>
              </Link>
            </li>
            <li>
              <Link href="/logout">
                <a className="flex items-center gap-2 p-4 border-b border-b-gray-200 text-gray-500 hover:text-gray-900">
                  <LogoutIcon className="h-5 w-5"/> Logout
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
