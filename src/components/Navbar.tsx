import Modal from './Modal.tsx';
import Login from './Login.tsx';
import logo from '../../public/logo.png';
import links from '../utils/links.ts';

function Navbar() {
  return (
    <header className="max-w-[1440px] mx-auto">
      <nav className="navbar bg-base-100 px-4">
        <div className="navbar-start">
          <a href="#hero">
            <img
              className="w-[70px] md:w-[100px] relative z-1"
              src={logo}
              alt="Logo"
            />
          </a>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content gap-y-4 mt-3 z-[1] p-4 shadow bg-base-100 rounded-lg w-52">
              {links.map(({ title, path }) => (
                <li key={title}>
                  <a className="font-semibold" href={path}>{title}</a>
                </li>
              ))}
              <li>
                <Modal label="LOGIN" color="btn-primary">
                  <Login />
                </Modal>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <ul className="w-full menu menu-horizontal px-1 gap-x-2">
              {links.map(({ title, path }) => (
                <li key={title}>
                  <a className="font-semibold" href={path}>{title}</a>
                </li>
              ))}
              <li>
                <Modal label="LOGIN" color="btn-primary">
                  <Login />
                </Modal>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;