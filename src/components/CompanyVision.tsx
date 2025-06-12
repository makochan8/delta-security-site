import React from 'react';

const CompanyVision: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[400px] md:h-[600px] flex items-center justify-center pt-[70px]"  // Navbar分の余白追加
      style={{ backgroundImage: "url('/images/corporate-vision.png')" }}
    >
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          株式会社デルタ警備システムの<br />
          ビジョン
        </h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          明日を守り、未来を築く。<br />
          私たちは安全と安心を提供し続ける企業であり続けます。
        </p>
      </div>
    </section>
  );
};

export default CompanyVision;
