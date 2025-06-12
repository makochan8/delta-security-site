import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-center text-[#003366] mb-8">プライバシーポリシー</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#003366] mb-4">プライバシーポリシーの宣言</h2>
          <div className="space-y-4">
            <p>当社は、当社の運営するウェブサイトをご利用いただくお客様のプライバシーの保護に努めています。</p>
            <p>当社が、サービスを提供するためには、お客様個人に関する情報（以下、「個人情報」といいます）を集めなければなりませんが、当社でその情報のプライバシーを守り、秘密を保持するために様々な手段を講じています。</p>
            <p>当社ではお客様のプライバシーを尊重しています。</p>
            <p>当社は個人情報を売買したり、交換したり、その他の方法で不正使用することには一切関与しておりません。</p>
            <p>このウェブサイトをご利用になり、個人情報を供与することで、あなたはこのプライバシーポリシーに説明されている個人情報の取り扱い等について受諾し、承認したものとみなされます。</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#003366] mb-4">個人情報収集の目的</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>当社がお客様に提供するサービスにおいて利用するため</li>
            <li>お客様に合ったサービスや新しい商品などの情報を的確にお知らせするため</li>
            <li>必要に応じてお客様に連絡を行なうため</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#003366] mb-4">個人情報の開示</h2>
          <p className="mb-4">下記の場合には、お客様の事前の同意なく当社はお客様の個人情報を開示できるものとします。</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>警察や裁判所、その他の政府機関から召喚状、令状、命令等によって要求された場合</li>
            <li>人の生命、身体または財産の保護のために必要がある場合であって、お客様の同意を得ることが困難であるとき</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#003366] mb-4">個人情報の管理</h2>
          <div className="space-y-4">
            <p>お客様の個人情報は、当社が適切な管理を行なうとともに、漏洩、滅失、毀損の防止のために最大限の注意を払っております。</p>
            <p>尚、当社ではお客様によりよいサービスを提供するため、個人情報を適切に取り扱っていると認められる外部の委託先に、個人情報の取り扱いの一部を委託しています。</p>
            <p>委託先は、委託業務を行なうために必要な範囲で個人情報を利用します。この場合、当社は、委託先との間で個人情報の取り扱いについて適切な契約を締結し、適切な管理を要求いたします。</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#003366] mb-4">リンク先</h2>
          <p>リンク先での個人情報の利用については、当社のプライバシーの考え方ではなく、リンク先自身のプライバシーの考え方に従って行われます。</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#003366] mb-4">このプライバシーの改訂</h2>
          <div className="space-y-4">
            <p>当社では、お客様に提供するサービス向上のため、上記各項目の内容を適宜見直し、改善してまいります。</p>
            <p>本書を変更する場合は、この変更について本ウェブサイトに掲載します。</p>
            <p>最新のプライバシー・ステートメントをサイトに掲載することにより、常にプライバシー情報の収集や使用方法を知ることができます。定期的にご確認くださいますようお願い申し上げます。</p>
            <p>また、当初情報が収集された時点で述べた内容と異なった方法で個人情報を使用する場合も、本ウェブサイトに掲載または電子メールにてご連絡させていただきます。本ウェブサイトが当初と異なった方法で個人情報の使用をしてよいかどうかについての選択権は、お客様が有しております。</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003366] mb-4">Google Analyticsの利用について</h2>
          <div className="space-y-4">
            <p>当サイトではホームページの利用状況を把握するためにGoogle Analyticsを利用しています。</p>
            <p>その為Google Analyticsから提供されるCookie を使用していますが、Google Analyticsによって個人を特定する情報は取得していません。</p>
            <p>また、Google Analyticsの利用により収集されたデータは、Google社のプライバシーポリシーに基づいて管理されています。</p>
            <p>Google Analyticsの利用規約・プライバシーポリシーについてはGoogle Analytics のホームページでご確認ください。</p>
            <p>Google Analyticsのサービス利用による損害については、当社は責任を負わないものとします。</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;