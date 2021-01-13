import React from "react"
import Link from "next/link"

type LinkProps = {
  name: string
  href: string
}

const linkData = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about/" },
]

const Header: React.FC = () => (
  <header>
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-gray-700 hover:text-gray-800">
                <Link href="/">
                  <a>Demo Site</a>
                </Link>
              </h1>
            </div>
            <div className="hidden sm:-my-px sm:ml-12 sm:flex sm:space-x-8">
              {linkData.map((item: LinkProps) => (
                <Link href={item.href} key={item.href}>
                  <a className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
