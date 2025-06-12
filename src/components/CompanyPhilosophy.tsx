import React from 'react';

const CompanyPhilosophy: React.FC = () => {
  return (
    <div id="philosophy" className="w-full mt-16 p-12 bg-white border-t border-gray-200">
      {/* 企業理念 */}
      <div className="flex flex-col md:flex-row-reverse items-start gap-8 mb-12">
        {/* 画像（右） */}
        <div className="w-full md:w-1/3 flex-shrink-0">
          <img
            src="/images/deltakeibi.png"
            alt="企業理念"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>

        {/* テキスト（左） */}
        <div className="w-full md:w-2/3 text-gray-800">
          <h2 className="text-[1.8rem] text-[#1a237e] font-bold mb-4">企業理念</h2>
          <p className="mb-4">
            株式会社デルタ455は、<br />
            福岡市博多区を拠点に、電気工事・機械工事・解体工事・屋根工事・サイディング工事・同質出隅加工販売など、<br />
            多岐にわたる専門工事を手がけてきました。
          </p>
          <p className="mb-4">
            長年、現場の第一線で培ってきた「安全への責任」と「人材育成」の経験をもとに、<br />
            このたび本社内に“警備支店”を立ち上げました。
          </p>
          <p className="mb-4">
            工事現場と警備の両側面から、より安心で信頼される現場づくりを目指し、<br />
            九州エリアの安全インフラを支える存在でありたいと考えています。
          </p>
          <p className="mb-4">
            デルタ警備システムは、「人を守り、街を支える」ことを使命とし、 安心と信頼を提供することで地域社会に貢献してまいります。
            私たちは、安全・安心を守るプロフェッショナルとして、 常に進化し続ける企業を目指します。
          </p>
        </div>
      </div>

      {/* 代表挨拶 */}
      <div id="greeting" className="flex flex-col md:flex-row items-start gap-8">
        {/* 画像（左） */}
        <div className="w-full md:w-1/3 flex-shrink-0">
          <img
            src="/images/delta-security.jpg"
            alt="代表取締役 廣松 清"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>

        {/* テキスト（右） */}
        <div className="w-full md:w-2/3 text-gray-800">
          <h2 className="text-[1.8rem] text-[#1a237e] font-bold mb-4">代表挨拶</h2>
          <p className="mb-4">
            株式会社デルタ455は、福岡市博多区を拠点に<br />
            電気設備工事・機械設備工事・解体工事・屋根工事・サイディング工事など<br />
            多岐に渡る工事業務を通じて、地域の現場と共に歩んでまいりました。
          </p>
          <p className="mb-4">
            現場で働く中で強く感じたのは、<br />
            「人が育つ現場こそ、いい現場である」ということ。
          </p>
          <p className="mb-4">
            私たちが新たに立ち上げた警備支店は、<br />
            単に警備業務を請け負うだけの場所ではありません。
          </p>
          <p className="mb-4">
            “もう一度やり直したい”と願う人たちが、<br />
            自分の人生に再び希望を持てる場所にしたい。
          </p>
          <p className="mb-4">
            そんな想いを胸に、「人材再生」をキーワードに、<br />
            働きながらスキルを磨き、社会とつながるための支援を全力で行っていきます。
          </p>
          <p className="mb-6">
            デルタ455は、これからも工事現場と警備の両面から、<br />
            地域の安全と、そして“人の未来”を支える企業であり続けます。
          </p>
          <p className="mb-4">
            今後とも、何卒よろしくお願い申し上げます。<br />
            <span className="mt-2 inline-block">
              株式会社デルタ455<br />
              代表取締役 廣松 清
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyPhilosophy;
