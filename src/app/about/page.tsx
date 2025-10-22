import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            회사소개
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            특허권, 저작권 컨설팅 및 IP 금융 전문 기업
          </p>
        </div>
      </section>

      {/* Company Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                기업 철학
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                <span className="font-bold text-[#3fb1d3]">Sol</span>은 태양의 의미로, 
                각 기업 및 연구소, 대학 등을 태양처럼 밝게 빛나도록 
                <span className="font-bold text-[#3fb1d3]"> 2</span>라는 그림자처럼 항상 곁에서 
                <span className="font-bold text-[#3fb1d3]"> Sol2 (솔투)</span> 소금의 역할을 한다는 
                기업의 모토를 가지고 있습니다.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                우리는 고객사의 성공이 곧 우리의 성공이라는 신념으로, 
                기술 및 사업 설계부터 특허권·저작권 컨설팅, IP 금융까지 
                통합적인 솔루션을 제공합니다.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://picsum.photos/seed/company/800/600"
                alt="Company Vision"
                fill
                className="object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl">
              <div className="w-16 h-16 bg-[#3fb1d3] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">혁신</h3>
              <p className="text-gray-600 dark:text-gray-400">
                끊임없는 기술 혁신으로 고객의 경쟁력을 높입니다.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl">
              <div className="w-16 h-16 bg-[#3fb1d3] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">신뢰</h3>
              <p className="text-gray-600 dark:text-gray-400">
                투명하고 정직한 컨설팅으로 고객의 신뢰를 얻습니다.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl">
              <div className="w-16 h-16 bg-[#3fb1d3] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">전문성</h3>
              <p className="text-gray-600 dark:text-gray-400">
                오랜 경험과 전문 지식으로 최고의 솔루션을 제공합니다.
              </p>
            </div>
          </div>

          {/* Our Services Overview */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              우리가 제공하는 가치
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#3fb1d3] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">기술 권리화 지원</h3>
                  <p className="text-gray-600 dark:text-gray-400">특허, 상표, 저작권 등 지식재산권 확보 및 보호</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#3fb1d3] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">시장 분석 및 전략 수립</h3>
                  <p className="text-gray-600 dark:text-gray-400">체계적인 시장 조사 및 진입 전략 제공</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#3fb1d3] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">기술거래 및 이전</h3>
                  <p className="text-gray-600 dark:text-gray-400">기술 가치평가 및 거래 지원 서비스</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#3fb1d3] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">IP 금융 컨설팅</h3>
                  <p className="text-gray-600 dark:text-gray-400">지식재산 기반 투자 유치 및 자금 조달</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

