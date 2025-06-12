import React, { useEffect, useRef } from 'react';
import { Building, MapPin, Phone, FileText } from 'lucide-react';

interface InfoBlockProps {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  delay?: number;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ title, children, icon, delay = 0 }) => {
  const blockRef = useRef<HTMLDivElement>(null);

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

    if (blockRef.current) {
      observer.observe(blockRef.current);
    }

    return () => {
      if (blockRef.current) {
        observer.unobserve(blockRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={blockRef}
      className="fade-in bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="rounded-full bg-blue-100 p-3 mr-4 text-blue-800">{icon}</div>
        <h3 className="text-lg font-bold text-blue-900">{title}</h3>
      </div>
      <div className="text-gray-700">{children}</div>
    </div>
  );
};

const CompanyInfo: React.FC = () => {
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
    <section id="company" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 ref={titleRef} className="section-title fade-in">
          企業情報
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <InfoBlock title="会社概要" icon={<Building size={24} />} delay={100}>
            <dl className="space-y-2">
              <dt className="font-semibold">商号</dt>
              <dd className="ml-4 mb-2">株式会社デルタ455</dd>

              <dt className="font-semibold">代表取締役</dt>
              <dd className="ml-4 mb-2">廣松 清</dd>

              <dt className="font-semibold">設立</dt>
              <dd className="ml-4 mb-2">平成18年5月1日</dd>

              <dt className="font-semibold">資本金</dt>
              <dd className="ml-4">4,000万円</dd>
            </dl>
          </InfoBlock>

          <InfoBlock title="所在地" icon={<MapPin size={24} />} delay={200}>
            <dl className="space-y-2">
              <dt className="font-semibold">本社</dt>
              <dd className="ml-4 mb-2">〒812-0873 福岡市博多区西春町1丁目4番3号</dd>

              <dt className="font-semibold">桜並木支店</dt>
              <dd className="ml-4 mb-2">〒812-0873 福岡市博多区西春町1丁目4番3号 3F</dd>

              <dt className="font-semibold">西支店</dt>
              <dd className="ml-4 mb-2">〒819-0161 福岡市西区今宿東1丁目13番1号</dd>

              <dt className="font-semibold">大分支店</dt>
              <dd className="ml-4 mb-2">〒870-0921 大分市萩原2丁目6-13 コスモス畑A-102</dd>

              <dt className="font-semibold">福岡工場</dt>
              <dd className="ml-4 mb-2">〒819-0163 福岡市西区今宿上ノ原202-43</dd>

              <dt className="font-semibold">沖縄工場</dt>
              <dd className="ml-4">〒901-2401 沖縄県中頭郡中城村字久場1983番</dd>
            </dl>
          </InfoBlock>

          <InfoBlock title="TEL / FAX" icon={<Phone size={24} />} delay={300}>
            <dl className="space-y-2">
              <dt className="font-semibold">本社</dt>
              <dd className="ml-4 mb-2">TEL 092-915-7111 / FAX 092-915-7117</dd>

              <dt className="font-semibold">桜並木支店</dt>
              <dd className="ml-4 mb-2">TEL 092-558-0003 / FAX 092-558-0004</dd>

              <dt className="font-semibold">西支店</dt>
              <dd className="ml-4 mb-2">TEL 092-806-0335 / FAX 092-806-0336</dd>

              <dt className="font-semibold">大分支店</dt>
              <dd className="ml-4 mb-2">TEL 097-503-3211 / FAX 097-503-3212</dd>

              <dt className="font-semibold">福岡工場</dt>
              <dd className="ml-4 mb-2">TEL 092-806-0248 / FAX 092-806-0269</dd>

              <dt className="font-semibold">沖縄工場</dt>
              <dd className="ml-4">TEL 098-917-4557 / FAX 098-917-4558</dd>
            </dl>
          </InfoBlock>

          <InfoBlock title="建設業許可情報" icon={<FileText size={24} />} delay={400}>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">特定建設業</h4>
                <p className="ml-4 mb-2">
                  土木工事業、とび・土工工事業、石工事業、電気工事業、管工事業、鋼構造物工事業、舗装工事業、しゅんせつ工事業、水道施設工事業、解体工事業
                </p>
                <p className="ml-4 text-sm">
                  許可番号：福岡県知事許可（特-5）第112125号（令和6年1月30日）
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">一般建設業</h4>
                <p className="ml-4 mb-2">
                  建築工事業、大工・左官・屋根・タイル・板金・ガラス・塗装・防水・内装仕上・熱絶縁・建具工事業
                </p>
                <p className="ml-4 text-sm">
                  許可番号：福岡県知事許可（般-6）第112125号（令和6年5月28日）
                </p>
              </div>
            </div>
          </InfoBlock>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
