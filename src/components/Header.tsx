'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: '홈', path: '/' },
    { name: '회사소개', path: '/about' },
    { name: '서비스', path: '/services' },
    { name: '실적', path: '/performance' },
    { name: '뉴스', path: '/news' },
    { name: '고객센터', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-100 dark:border-gray-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#3fb1d3] to-[#2c9ab4] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S2</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">㈜솔투미래연</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Sol2mireyun</p>
            </div>
          </Link>
          
          <ul className="hidden md:flex space-x-8 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  href={item.path}
                  className={`transition-colors ${
                    pathname === item.path
                      ? 'text-[#3fb1d3] font-semibold'
                      : 'text-gray-700 dark:text-gray-300 hover:text-[#3fb1d3]'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link 
                href="/consultation"
                className="px-4 py-2 bg-[#3fb1d3] text-white rounded-lg hover:bg-[#2c9ab4] transition-all duration-300 hover:shadow-lg inline-block"
              >
                무료진단
              </Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-gray-700 dark:text-gray-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

