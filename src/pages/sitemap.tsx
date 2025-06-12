import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Briefcase, Users, Building, Mail } from 'lucide-react';

const sitemap: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
        サイトマップ
      </h1>
      <div className="flex justify-center mb-8">
        <img
          src="/images/sitemap.png"
          alt="サイトマップ"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/"> {/* トップページ */}
          <div className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300 min-w-[200px]">
            <Home className="w-6 h-6" />
            トップページ
          </div>
        </Link>

        <Link to="/" state={{ scrollToId: 'business' }}>
          <div className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300 min-w-[200px]">
            <Briefcase className="w-6 h-6" />
            事業案内
          </div>
        </Link>

        <Link to="/" state={{ scrollToId: 'company' }}>
          <div className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300 min-w-[200px]">
            <Building className="w-6 h-6" />
            会社情報
          </div>
        </Link>

        <Link to="/" state={{ scrollToId: 'contact-form' }}>
          <div className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300 min-w-[200px]">
            <Mail className="w-6 h-6" />
            お問い合わせ
          </div>
        </Link>

        <Link to="/" state={{ scrollToId: 'recruit' }}>
          <div className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300 min-w-[200px]">
            <Users className="w-6 h-6" />
            採用情報
          </div>
        </Link>
      </div>
    </div>
  );
};

export default sitemap;

