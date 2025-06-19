import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-full">
      <div className="p-4">
        <h2 className="text-lg font-bold">Navigation</h2>
        <ul className="mt-4">
          <li>
            <Link href="/" className="block py-2 hover:bg-gray-700">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="block py-2 hover:bg-gray-700">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="block py-2 hover:bg-gray-700">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block py-2 hover:bg-gray-700">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;