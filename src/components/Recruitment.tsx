import React, { useEffect, useRef } from 'react';

interface RecruitCardProps {
  title: string;
  description: React.ReactNode;
  delay?: number;
}

const RecruitCard: React.FC<RecruitCardProps> = ({ title, description, delay = 0 }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('appear');
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="flex flex-col justify-between bg-white rounded-lg shadow-md p-8 w-full max-w-md fade-in"
    >
      <div>
        <h3 className="text-xl font-bold text-[#1744b3] mb-6">{title}</h3>
        <div className="text-gray-800 leading-relaxed mb-6">{description}</div>
      </div>
      <div className="text-center">
        <a
          href="https://www.delta455.com/recruit/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#1744b3] text-white px-8 py-3 rounded-lg hover:bg-[#1233a2] transition-colors duration-200"
        >
          採用はこちら
        </a>
      </div>
    </div>
  );
};

const Recruitment: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section id="recruit" className="recruit-section">
      <div className="overlay"></div>
      <div className="recruit-inner">
        <h2
          ref={titleRef}
          className="text-3xl font-bold text-center mb-12 relative pb-3 text-white fade-in after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-16 after:bg-white"
        >
          採用情報
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <RecruitCard
            title="未経験者歓迎"
            description={
              <>
                はじめの一歩を、私たちと一緒に。<br />
                警備の知識や経験がなくても大丈夫。<br />
                研修制度がしっかり整っているので、安心してスタートできます。<br />
                「やってみたい」の気持ちが、応募資格です。<br />
                人と接するのが好き。体を動かすのが好き。<br />
                そんな"あなたらしさ"を活かせる場所が、ここにあります。
              </>
            }
            delay={100}
          />
          <RecruitCard
            title="新卒・中途採用"
            description={
              <>
                未来を築く仲間を募集しています。<br />
                警備業界が初めての方も、<br />
                他業種からの転職も、すべて歓迎。<br />
                社会人デビューの新卒も、キャリアを活かしたい中途の方も、<br />
                それぞれのペースで育てていく体制があります。<br />
                「人としての成長」も、仕事の一部。<br />
                あなたの挑戦を、私たちは全力で応援します。
              </>
            }
            delay={200}
          />
        </div>

        <div className="bg-white/10 backdrop-blur-sm mt-12 p-8 rounded-lg max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">キャリアをスタートさせよう</h3>
            <p className="text-gray-100 mb-6 max-w-2xl mx-auto">
              株式会社デルタ警備システムでは、意欲ある人材を常に募集しています。<br />
              充実した研修制度と安定した雇用環境で、あなたの成長をサポートします。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recruitment;
