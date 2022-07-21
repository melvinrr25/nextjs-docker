import Link from 'next/link'

export default function Nac() {

  return (
    <>
      <div className="top-logo">
        <span>WORDY!</span>
        <label className="menu-icon" htmlFor="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <input type="checkbox" id="menu-toggle" />
      <div className="main-side-menu">
        <nav>
          <div className="top-logo">
            <span>WORDY!</span>
            <label className="menu-icon-close" htmlFor="menu-toggle">
              &times;
            </label>
          </div>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/my-words">
                <a>My Words</a>
              </Link>
            </li>
            <li>
              <Link href="/play">
                <a>Play</a>
              </Link>
            </li>
            <li>
              <Link href="/logout">
                <a>Logout</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
