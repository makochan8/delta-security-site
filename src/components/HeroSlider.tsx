import React from 'react';

interface HeroSliderProps {
  images: string[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ images }) => {
  const backgroundImage = images[0];

  return (
    <section
      className="relative w-full h-[400px] md:h-[600px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* テキスト */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20">
        <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          警備業界で
          <br />
          一緒に働こう！
        </h2>
        <a
          href="#recruit"
          className="mt-4 inline-block bg-white text-[#1744b3] font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#1744b3] hover:text-white transition-colors duration-300"
        >
          求人情報を見る →
        </a>
      </div>
    </section>
  );
};

export default HeroSlider;
