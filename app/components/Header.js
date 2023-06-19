import { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import CustomLink from "./CustomLink";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-slate-900 shadow-sm z-10 relative">
      <nav className="container mx-auto flex flex-wrap justify-between items-center p-2">
        <div className="flex items-end">
          <h1 className="cursor-pointer m-1 p-1 h-12 w-12 rounded border text-white border-slate-500">
            Hu
          </h1>
        </div>

        <div className="lg:hidden z-20 mr-3">
          <HamburgerMenu
            isOpen={isOpen}
            menuClicked={handleClick}
            width={18}
            height={15}
            strokeWidth={1}
            rotate={isOpen ? 90 : 0} // Rotate icon to show "X" when menu is open
            color={isOpen ? "gray" : "white"}
            borderRadius={0}
            animationDuration={0.5}
          />
        </div>
      </nav>

      <div className="w-full bg-white">
        <div
          className={`bg-white bg-opacity-80 fixed top-0 right-0 h-full z-10 transform transition-transform duration-200 ease-in-out overflow-auto ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } lg:translate-x-0 lg:static lg:w-auto lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 mx-auto container`}
        >
          <ul className="flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-4 p-2 pl-4 items-center text-2xl mt-20 lg:text-sm lg:mt-0">
            <li>
              <CustomLink href="/">Home</CustomLink>
            </li>
            <li>
              <CustomLink href="#products">Our Products</CustomLink>
            </li>
            <li>
              <CustomLink href="">What We Do</CustomLink>
            </li>
            {/* <li>
              <CustomLink href="/products/teefindr">TeeFindr</CustomLink>
            </li>
            <li>
              <CustomLink href="/products/leadr">Leadr</CustomLink>
            </li> */}
            <li>
              <CustomLink href="">Our Team</CustomLink>
            </li>
            <li>
              <CustomLink href="#contact">Contact Us</CustomLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
