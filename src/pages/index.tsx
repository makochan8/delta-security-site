// src/pages/index.tsx
import React from 'react';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">
        株式会社デルタ警備システム
      </h1>
      {/* 他のトップページ用コンテンツをここに追加できます */}

      <Footer />
    </div>
  );
};

export default Home;