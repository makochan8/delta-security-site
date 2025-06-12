import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/delta-security.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 黒いオーバーレイ */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* コンテンツ（中央寄せ） */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
        <h2 className="text-3xl md:text-6xl font-bold mb-4">
         
        </h2>
      </div>
    </section>
  );
};

export default Hero;
