import React, { useEffect, useRef } from 'react';

const BusinessInfo: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const flowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      },
      { threshold: 0.1 }
    );

    [titleRef, storyRef, flowRef].forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      [titleRef, storyRef, flowRef].forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <>
      <section id="business" className="business-section relative py-16 px-4">
        <div className="overlay"></div>
        <div className="business-inner">
          <h2 ref={titleRef} className="section-title text-white fade-in">
            事業案内
          </h2>

          <div className="service-list-section">
            <h3 className="text-2xl font-bold mb-6">業務内容</h3>
            <ul className="service-list">
              <li>
                施設警備・イベント警備
                <span className="new-badge">NEW!</span>
              </li>
              <li>サイディング工事</li>
              <li>屋根工事</li>
              <li>板金工事</li>
              <li>塗装工事</li>
              <li>解体工事</li>
              <li>左官工事</li>
              <li>同質出隅加工販売</li>
              <li>土木工事</li>
              <li>電気・機械設備工事</li>
            </ul>

            <div className="mt-8 pt-8 border-t border-white/20">
              <h4 className="font-bold mb-4">備考</h4>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>グリーンサイト対応済</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>電子マニフェスト対応</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rebuild-section" ref={storyRef}>
        <div className="rebuild-wrapper">
          <div className="rebuild-content">
            <div className="rebuild-image-container">
              <img
                src="/images/deltalife.png"
                alt="REAL × FIELD"
                className="rebuild-image"
              />
            </div>
            <div className="rebuild-text">
              <h2 className="rebuild-title">
                <span className="text-[#1744b3]">R</span>EAL × FIELD
              </h2>
              <p className="rebuild-sublead">
                デルタ警備システムの強みは、<br />
                デスクの上で語られる理想論ではなく、<br />
                泥だらけの"現場"で培ったリアルな知見と人間理解です。
              </p>
              <div className="space-y-6 text-gray-700">
                <p className="leading-relaxed">
                  現場を知るからこそ、<br />
                  どこで人がつまずくかがわかる。<br />
                  どこに力を注げば、人が変わるかがわかる。
                </p>
                <p className="leading-relaxed">
                  誰かの人生の「転機」になれる支店でありたい。<br />
                  ただ守るだけの警備ではなく、<br />
                  「働くことで未来が拓ける」――<br />
                  そんな生き方のきっかけになりたい。
                </p>
                <p className="leading-relaxed">
                  私たちが見ているのは、<br />
                  "警備の仕事"の先にある人生です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="flow" ref={flowRef} className="py-16 px-4 bg-gray-50 fade-in">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold text-center text-[#1744b3] mb-8">
            お仕事までの流れ
          </h3>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                { step: 1, title: 'お問い合わせ', desc: 'お電話またはフォームよりご連絡ください' },
                { step: 2, title: '面談', desc: '具体的な業務内容や条件についてお話しします' },
                { step: 3, title: '研修', desc: '充実した研修制度で安心してスタート' },
                { step: 4, title: '業務開始', desc: '経験豊富なスタッフがサポートします' }
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1744b3] text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1744b3] mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessInfo;
