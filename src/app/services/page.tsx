import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  const services = [
    {
      id: 'ip-rights',
      number: '01',
      title: '지식재산 권리화 방안 지원',
      description: `기술 권리화의 중요성은 자유로운 사업 활동의 보장, 개발 및 판매 특허 기술의 로열티 수익, 
        기업의 가치 증대, 경쟁자의 특허 취득 방어, 시장진입 차단, 경쟁자 기술의 상호 실시 허락 및 
        침해분쟁시 반소 근거 등이 되므로 중요합니다.`,
      features: [
        '기업 내부 환경조사',
        '효과적인 사업화 기술 정비',
        '권리화 전략 구축',
        '특허 출원 및 등록 지원'
      ],
      color: 'from-blue-50 to-cyan-50 dark:from-gray-800'
    },
    {
      id: 'analysis',
      number: '02',
      title: '기업의 내부 및 외부환경 분석',
      description: `기업에서 사업화 하려는 기술의 권리화 정도 및 재무현황, 외부 시장의 동향 등을 분석하여 
        본격적인 시장진입에 대한 전략을 제공합니다.`,
      features: [
        '권리화 정도 및 재무현황 분석',
        '외부 시장 동향 조사',
        '시장진입 전략 제공',
        '기술분쟁 예방 컨설팅',
        '마케팅 및 홍보 전략'
      ],
      color: 'from-purple-50 to-pink-50 dark:from-gray-800'
    },
    {
      id: 'commercialization',
      number: '03',
      title: '기술 사업화 지원',
      description: `기술거래, 기술평가, 협상 & 계약 및 사후관리 서비스를 제공하며 
        이에 소요되는 기술거래 및 기술평가 지원 기회를 제공합니다.`,
      features: [
        '기술거래 및 평가',
        '협상 전략 및 대응 방안',
        '기술 거래조건 검토',
        '계약서 작성 서비스',
        '사후관리 서비스'
      ],
      color: 'from-green-50 to-emerald-50 dark:from-gray-800'
    },
    {
      id: 'reports',
      number: '04',
      title: '전략 보고서 지원',
      description: `Patent Map(PM)은 특정 분야 기술에 대한 국내외 특허권 및 특허 출원 상황을 상세하게 분석한 자료로서, 
        기술 흐름을 한눈에 파악할 수 있어 연구 기획 등에 널리 활용됩니다.`,
      features: [
        '특허 정보 분석 및 시각화',
        '기술 동향 파악',
        '출원인 동향 분석',
        '특허 맵 제작',
        '연구개발 방향 제시'
      ],
      color: 'from-orange-50 to-red-50 dark:from-gray-800'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            핵심 서비스
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            전문적이고 체계적인 지식재산 컨설팅 서비스
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="space-y-12">
            {services.map((service) => (
              <div 
                key={service.id}
                id={service.id}
                className={`bg-gradient-to-br ${service.color} dark:to-gray-700 rounded-3xl p-8 md:p-12 scroll-mt-24`}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#3fb1d3] rounded-2xl flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">{service.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <svg className="w-6 h-6 text-[#3fb1d3] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#3fb1d3] to-[#2c9ab4]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            서비스가 필요하신가요?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            전문 컨설턴트가 귀사의 상황에 맞는 최적의 솔루션을 제안해 드립니다.
          </p>
          <a 
            href="/consultation"
            className="inline-block px-12 py-4 bg-white text-[#3fb1d3] rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            무료 진단 신청하기
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

