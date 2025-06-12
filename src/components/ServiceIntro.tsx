import React, { useEffect, useRef } from 'react';
import { ArrowRight, Shield, Users, Clock, CheckCircle2 } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  delay?: number;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, delay = 0 }) => {
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
      className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl fade-in"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-[#1744b3] mb-4">{title}</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
        <a
          href={`#${title === '施設警備' ? 'facility-security' : 'event-security'}`}
          className="inline-flex items-center text-[#1744b3] font-medium hover:text-[#1233a2] transition-all duration-300 group-hover:translate-x-2"
        >
          詳しく見る <ArrowRight size={18} className="ml-2" />
        </a>
      </div>
    </div>
  );
};

const ServiceIntro: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const facilityRef = useRef<HTMLDivElement>(null);
  const eventRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      },
      { threshold: 0.1 }
    );

    [titleRef, facilityRef, eventRef].forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      [titleRef, facilityRef, eventRef].forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <>
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 ref={titleRef} className="section-title fade-in">
            主要サービス
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <Card
              title="施設警備"
              description="ビル、病院、学校などの施設における常駐型警備業務で、24時間体制の安心を提供します。充実した研修制度と経験豊富なスタッフによるサポートで、未経験の方も安心してスタートできます。"
              imageUrl="/images/facility-security.jpg"
              delay={100}
            />
            <Card
              title="イベント警備"
              description="お祭りや花火大会などのイベント会場で、来場者の安全確保とスムーズな進行をサポートします。状況に応じた柔軟な対応と、お客様の目線に立った丁寧な対応を心がけています。"
              imageUrl="/images/event-security.jpeg" // ✅ 元の画像
              delay={200}
            />
          </div>
        </div>
      </section>

      <section
        id="facility-security"
        ref={facilityRef}
        className="py-16 px-4 bg-white fade-in"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1744b3] mb-12">
            施設警備
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/facility-security.jpg"
                alt="施設警備"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Shield className="flex-shrink-0 w-6 h-6 text-[#1744b3]" />
                <div>
                  <h3 className="text-xl font-bold mb-2">24時間体制の安心警備</h3>
                  <p className="text-gray-600">
                    常駐警備員による巡回と監視で、施設の安全を24時間365日守ります。
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="flex-shrink-0 w-6 h-6 text-[#1744b3]" />
                <div>
                  <h3 className="text-xl font-bold mb-2">迅速な緊急対応</h3>
                  <p className="text-gray-600">
                    緊急事態発生時には、速やかに対応し、関係機関との連携を図ります。
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="flex-shrink-0 w-6 h-6 text-[#1744b3]" />
                <div>
                  <h3 className="text-xl font-bold mb-2">充実の警備システム</h3>
                  <p className="text-gray-600">
                    最新のセキュリティシステムと警備員の目による二重の安全確保を実現。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="event-security"
        ref={eventRef}
        className="py-16 px-4 bg-gray-50 fade-in"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1744b3] mb-12">
            イベント警備
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <div className="flex items-start gap-4">
                <Users className="flex-shrink-0 w-6 h-6 text-[#1744b3]" />
                <div>
                  <h3 className="text-xl font-bold mb-2">来場者の安全確保</h3>
                  <p className="text-gray-600">
                    混雑時の誘導や事故防止など、来場者の安全を最優先に考えた警備を提供。
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="flex-shrink-0 w-6 h-6 text-[#1744b3]" />
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    イベント特性に応じた警備計画
                  </h3>
                  <p className="text-gray-600">
                    イベントの規模や特性に合わせて、最適な警備計画を立案・実行します。
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="flex-shrink-0 w-6 h-6 text-[#1744b3]" />
                <div>
                  <h3 className="text-xl font-bold mb-2">スムーズな運営サポート</h3>
                  <p className="text-gray-600">
                    会場設営から撤収まで、イベントの円滑な運営をトータルでサポート。
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/images/event-security.jpeg"
                alt="イベント警備"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceIntro;
