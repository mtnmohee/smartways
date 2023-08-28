import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathname = usePathname();
  const isActive = pathname;
  return (
    <div className="lg:hidden w-72 h-screen bg-blue-900 text-white fixed top-0 right-0 flex flex-col justify-center items-center z-30">
      <ul className="text-xl flex flex-col gap-7  text-center">
        <li className="">
          <Link
            href="/"
            className={`hover:border-b-2 hover:border-white transition-all duration-150 ${
              isActive === "/" ? "border-b-2 border-white" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li className="">
          <Link
            href="/about"
            className={`hover:border-b-2 hover:border-white transition-all duration-150 ${
              isActive === "/about" ? "border-b-2 border-white" : ""
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className={`hover:border-b-2 hover:border-white transition-all duration-150 ${
              isActive === "/services" ? "border-b-2 border-white" : ""
            }`}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={`hover:border-b-2 hover:border-white transition-all duration-150 ${
              isActive === "/projects" ? "border-b-2 border-white" : ""
            }`}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className={`hover:border-b-2 hover:border-white transition-all duration-150 ${
              isActive === "/products" ? "border-b-2 border-white" : ""
            }`}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            href="/partners"
            className={`hover:border-b-2 hover:border-white transition-all duration-150 ${
              isActive === "/partners" ? "border-b-2 border-white" : ""
            }`}
          >
            Partners
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={`hover:border-b-2 hover:border-white transition-all duration-150 ${
              isActive === "/contact" ? "border-b-2 border-white" : ""
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
