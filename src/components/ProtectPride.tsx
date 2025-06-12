import React from 'react';

const ProtectPride: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* 画像 */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src="/images/protect-pride.jpg"
            alt="PROTECT × PRIDE"
            className="rounded-xl shadow-lg w-full max-w-[400px] object-contain"
          />
        </div>

        {/* テキスト */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 border-b-4 border-[#0d47a1] inline-block">
            <span className="text-[#0d47a1]">PROTECT</span> × PRIDE
          </h2>
          <div className="space-y-4 text-base md:text-lg leading-relaxed">
            <p className="text-[#0d47a1] font-bold">
              デルタ警備システムの現場力は、単なる安全管理ではありません。<br />
              「人を守る」「街を支える」その使命を胸に、<br />
              私たちは日々、目の前の“当たり前”を守り抜いています。
            </p>
            <p>
              不安の中にいる誰かに、安心を届ける。<br />
              社会の歯車の一つとしてではなく、<br />
              誇りある人生を歩む「主人公」でありたい。
            </p>
            <p>
              デルタの仕事は、<br />
              “守ることで、自分も変わっていく”──<br />
              そんなリアルを積み重ねています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtectPride;