import logo from '../../public/logo.png';

function Footer() {
  return (
    <div className="w-full bg-base-200">
      <div className="max-w-[1440px] mx-auto">
        <footer className="footer py-12 px-6 text-base-content">
          <aside>
            <a href="#">
              <img
                className="w-[100px]"
                src={logo}
                alt="Logo"
              />
            </a>
            <p className="text-lg font-bold text-gray-500">ALTECH OMEGA ANDALAN</p>
          </aside>
          <nav>
            <header className="footer-title">Services</header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </div>
  );
}

export default Footer;