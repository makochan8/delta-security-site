import React from 'react';

const RealField: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto flex flex-wrap gap-12 items-center justify-center">
        {/* 差し替え済み画像 */}
        <div className="flex-1 max-w-[600px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/images/protect-pride-hero.png"
            alt="PROTECT × PRIDE"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* 差し替え済みテキスト */}
        <div className="flex-1 max-w-[600px] text-lg leading-relaxed text-gray-800">
          <h2 className="text-[2.4rem] font-extrabold mb-4 border-b-4 border-[#0d47a1] inline-block">
            <span style={{ color: '#0d47a1' }}>P</span>
            <span style={{ color: '#000' }}>ROTECT × PRIDE</span>
          </h2>
          <div className="space-y-6">
            <p className="text-[#0d47a1] font-bold leading-relaxed">
              デルタ警備システムの現場力は、<br />
              単なる安全管理ではありません。<br />
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

export default RealField;
