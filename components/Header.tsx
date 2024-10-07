import Link from 'next/link';

const Header = () => {
  return (
      <div className="header fixed top-0 left-0 w-full z-10 p-4 bg-black/10 backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Marketing Agency</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

  );
};

export default Header;
