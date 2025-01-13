import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: '홈', href: '/' },
    { name: '사업소개', href: '/about' },
    { name: '메뉴소개', href: '/menu' },
    { name: '문의하기', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className="fixed w-full top-0 z-50 bg-white shadow-md"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          {/* 로고 */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="마로상회 로고" className="h-12" />
          </Link>

          {/* 데스크탑 메뉴 */}
          <div className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300
                  ${isActivePath(item.href)
                    ? 'bg-rose-600 text-white shadow-lg shadow-rose-200'
                    : 'text-gray-700 hover:bg-rose-50 hover:text-rose-600'}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors duration-300
                ${scrolled ? 'text-red-600 hover:bg-red-50' : 'text-red-500 hover:bg-white/10'}`}
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 패널 */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full mt-2 bg-white shadow-lg rounded-b-xl overflow-hidden border-t border-red-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200
                    ${isActivePath(item.href)
                      ? 'bg-red-50 text-red-600'
                      : 'text-gray-700 hover:bg-red-50 hover:text-red-600'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
