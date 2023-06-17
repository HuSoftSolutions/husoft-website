import Link from "next/link";

function CustomLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-gray-500 hover:text-gray-800 transition-colors"
    >
      {children}
    </Link>
  );
}

export default CustomLink;
