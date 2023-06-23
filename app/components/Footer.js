import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="flex w-full justify-between flex-row mb-10 sm:mb-20">
          <div className="w-1/5 sm:w-[150px] mb-8 sm:mb-0 pr-4">
            <Image
              src="/images/worked_with/HU_Footer_Logo.png" // Replace this with the actual path
              alt="Logo"
              width={50} // Adjust width and height to your needs
              height={50}
              layout="responsive"
            />
          </div>
          <div className="flex w-fit justify-end">
            <div className="w-full pr-4">
              <h2 className="text-white text-lg mb-3 font-semibold">
                Quick Links
              </h2>
              <ul className="text-sm">
                <li>
                  <a className="text-gray-400 hover:text-white" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-400 hover:text-white"
                    href="#products"
                  >
                    Our Products
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white" href="">
                    What We Do
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white" href="">
                    Our Team
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white" href="#contact">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full">
              <h2 className="text-white text-lg mb-3 font-semibold">
                Contact Us
              </h2>
              <ul className="text-sm">
                <li>
                  <p>Amsterdam, New York 12010</p>
                </li>
                <li>
                  <p>Email: team@husoftsolutions.com</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-4">
          <p className="text-center text-sm text-gray-500">
            © 2023 HuSoft Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
