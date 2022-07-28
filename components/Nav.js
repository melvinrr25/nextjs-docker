import Link from 'next/link'
import { useRef } from "react";
import { 
  MenuIcon, XIcon, HomeIcon, LogoutIcon, BookOpenIcon, PuzzleIcon
} from '@heroicons/react/outline'
import { signIn, signOut, useSession } from "next-auth/react"

export default function Nav() {
  const { data: session } = useSession()
  const hiddenInputForMenu = useRef()

  const handleItemClicked = () => {
    hiddenInputForMenu.current.checked = false
  };

  return (
    <div className="md:w-[200px]">
      <div className="md:fixed">
        <div className="top-logo h-18 bg-white border-b border-b-gray-200 flex justify-between p-4 items-center md:border-r-[0.5px] md:border-r-gray-200">
          <span>
            <Link href="/">
              <a>
                <img src="/logo.svg" alt="" className="h-[45px]" />
              </a>
            </Link>
          </span>
          <label className="menu-icon cursor-pointer md:hidden" htmlFor="menu-toggle">
            <MenuIcon className="h-6 w-6 text-gray-800"/>
          </label>
        </div>
        <input type="checkbox" id="menu-toggle" className="hidden peer" ref={hiddenInputForMenu} />
        <div className="main-side-menu fixed left-0 top-0 w-0 h-screen bg-black/[0.5] left-[-5000px] peer-checked:left-0 peer-checked:w-full duration-300 ase-out md:left-0 md:w-[200px] md:relative">
          <nav className="">
            <div className="top-logo h-16 bg-white border-b border-b-gray-200 flex justify-between p-4 items-center md:hidden md:border-r-[0.5px] md:border-r-gray-200">
              <span>
                <Link href="/">
                  <a>
                    <img src="/logo.svg" alt="" className="h-[45px]" />
                  </a>
                </Link>
              </span>
              <label className="menu-icon-close" htmlFor="menu-toggle">
                <XIcon className="h-6 w-6 text-gray-800 cursor-pointer"/>
              </label>
            </div>
            <ul className="bg-white w-1/2 h-screen md:w-[200px] border-r-[0.5px] border-r-gray-200">
              <li>
                <Link href="/dashboard">
                  <a className="flex items-center gap-2 p-4 border-b border-b-gray-200 text-gray-500 hover:text-gray-900" onClick={handleItemClicked}>
                    <HomeIcon className="h-5 w-5"/> Dashboard
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/my-words">
                  <a className="flex items-center gap-2 p-4 border-b border-b-gray-200 text-gray-500 hover:text-gray-900" onClick={handleItemClicked}>
                    <BookOpenIcon className="h-5 w-5"/> My Words
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/play">
                  <a className="flex items-center gap-2 p-4 border-b border-b-gray-200 text-gray-500 hover:text-gray-900" onClick={handleItemClicked}>
                    <PuzzleIcon className="h-5 w-5"/> Play
                  </a>
                </Link>
              </li>
              { session && (
                <li>
                  <button 
                    className="flex items-center gap-2 p-4 border-b border-b-gray-200 text-gray-500 hover:text-gray-900 w-full"
                    onClick={ () => signOut({ callbackUrl: '/signin' }) }
                  >
                    <LogoutIcon className="h-5 w-5"/> Logout
                  </button>
                </li>
              )}

              { !session && (
                <li>
                  <button 
                    className="flex items-center gap-2 p-4 border-b border-b-gray-200 text-gray-500 hover:text-gray-900 w-full"
                    onClick={ () => signIn() }
                  >
                    <LogoutIcon className="h-5 w-5"/> Login
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
