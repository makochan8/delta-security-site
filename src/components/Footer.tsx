import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">株式会社デルタ警備システム</h2>
          <address className="not-italic mb-4 text-center leading-relaxed">
            〒812-0873 福岡市博多区西春町1丁目4番3号<br />
            TEL: <a href="tel:092-915-7111" className="hover:underline">092-915-7111（平日8:00〜17:00）</a><br />
            <a href="mailto:info@delta455.co.jp" className="hover:underline">info@delta455.co.jp</a>
          </address>
          <div className="flex gap-6 mb-4">
            <a
              href="https://www.instagram.com/inc.delta_455/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1744b3] transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCNWW5YAyntpRTrIOMJV861w"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1744b3] transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a
              href="https://www.tiktok.com/@kiyoshihiromatsu?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1744b3] transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faTiktok} size="2x" />
            </a>
          </div>
          <p className="text-sm mb-2">&copy; 2025 株式会社デルタ警備システム All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy-policy" className="hover:underline">プライバシーポリシー</a>
            <a href="/sitemap" className="hover:underline">サイトマップ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
