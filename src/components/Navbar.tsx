import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

interface DropdownItemProps {
  title: string;
  items: { href: string; text: string }[];
}

const DropdownItem: React.FC<DropdownItemProps> = ({ title, items }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const navHeight = document.querySelector('header')?.offsetHeight || 0;
        const targetPosition = targetElement.offsetTop - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <div className="relative group">
      <span className="nav-link cursor-pointer">{title}</span>
      <div className="hidden group-hover:block absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[200px] z-50">
        {items.map((item, index) => (
          item.href.startsWith('/') ? (
            <Link
              key={index}
              to={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1744b3] transition-colors duration-200"
            >
              {item.text}
            </Link>
          ) : (
            <a
              key={index}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1744b3] transition-colors duration-200"
              onClick={(e) => handleLinkClick(e, item.href)}
            >
              {item.text}
            </a>
          )
        ))}
      </div>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const companyItems = [
    { href: "#philosophy", text: "企業理念" },
    { href: "#greeting", text: "代表挨拶" },
  ];

  const mainServiceItems = [
    { href: "#facility-security", text: "施設警備" },
    { href: "#event-security", text: "イベント警備" },
    { href: "#business", text: "業務案内" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const navHeight = document.querySelector('header')?.offsetHeight || 0;
        const targetPosition = targetElement.offsetTop - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
        setIsOpen(false);
      }
    }
  };

  return (
    <header className="fixed w-full z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[70px]">
          <Link to="/" className="text-xl font-bold text-[#1744b3] whitespace-nowrap">
            株式会社デルタ警備システム
          </Link>

          <button
            className="md:hidden text-gray-800 hover:text-[#1744b3] focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden md:flex items-center gap-6">
            <DropdownItem title="企業情報" items={companyItems} />
            <DropdownItem title="主要サービス" items={mainServiceItems} />
            <a href="#recruit" className="nav-link" onClick={(e) => handleLinkClick(e, '#recruit')}>
              採用情報
            </a>
            <a href="#contact-form" className="nav-link" onClick={(e) => handleLinkClick(e, '#contact-form')}>
              お問い合わせ
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <div className="text-right">
              <div className="text-sm text-gray-600">電話受付 平日8:00〜17:00</div>
              <a
                href="tel:092-915-7111"
                className="flex items-center text-[#1744b3] font-bold hover:text-[#1233a2] transition-colors duration-200"
              >
                <Phone size={16} className="mr-1" />
                092-915-7111
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.youtube.com/channel/UCNWW5YAyntpRTrIOMJV861w"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#1744b3] transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
              <a
                href="https://www.instagram.com/inc.delta_455/?utm_source=ig_web_button_share_sheet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#1744b3] transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a
                href="https://www.tiktok.com/@kiyoshihiromatsu?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#1744b3] transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faTiktok} size="lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-screen py-4' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col gap-2">
            <div className="mb-2">
              <div className="font-bold text-[#1744b3] px-4 py-2">企業情報</div>
              <div className="pl-8">
                {companyItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block py-2 text-gray-700 hover:text-[#1744b3] transition-colors duration-200"
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.text}
                  </a>
                ))}
              </div>
            </div>
            <div className="mb-2">
              <div className="font-bold text-[#1744b3] px-4 py-2">主要サービス</div>
              <div className="pl-8">
                {mainServiceItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block py-2 text-gray-700 hover:text-[#1744b3] transition-colors duration-200"
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.text}
                  </a>
                ))}
              </div>
            </div>
            <a href="#recruit" className="mobile-nav-link px-4" onClick={(e) => handleLinkClick(e, '#recruit')}>
              採用情報
            </a>
            <a href="#contact-form" className="mobile-nav-link px-4" onClick={(e) => handleLinkClick(e, '#contact-form')}>
              お問い合わせ
            </a>
          </nav>

          <div className="mt-6 pt-6 border-t border-gray-200 px-4">
            <div className="text-sm text-gray-600">電話受付 平日8:00〜17:00</div>
            <a
              href="tel:092-915-7111"
              className="flex items-center text-[#1744b3] font-bold mt-1 hover:text-[#1233a2] transition-colors duration-200"
            >
              <Phone size={16} className="mr-1" />
              092-915-7111
            </a>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://www.youtube.com/channel/UCNWW5YAyntpRTrIOMJV861w"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#1744b3] transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
              <a
                href="https://www.instagram.com/inc.delta_455/?utm_source=ig_web_button_share_sheet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#1744b3] transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a
                href="https://www.tiktok.com/@kiyoshihiromatsu?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#1744b3] transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faTiktok} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
