import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            고객센터
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            언제든지 편하게 문의해 주세요
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg">
              <div className="w-20 h-20 bg-[#3fb1d3] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">전화 문의</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                <a href="tel:02-1234-5678" className="hover:text-[#3fb1d3] transition-colors">
                  02-1234-5678
                </a>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                평일 09:00 - 18:00<br />
                (주말 및 공휴일 휴무)
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg">
              <div className="w-20 h-20 bg-[#3fb1d3] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">이메일</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                <a href="mailto:info@sol2mireyun.com" className="hover:text-[#3fb1d3] transition-colors">
                  info@sol2mireyun.com
                </a>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                영업일 기준 24시간 내<br />
                답변 드립니다
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg">
              <div className="w-20 h-20 bg-[#3fb1d3] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">주소</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                서울특별시 강남구<br />
                테헤란로 123, 456호
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                2호선 강남역 3번 출구<br />
                도보 5분
              </p>
            </div>
          </div>

          {/* Office Hours */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              운영 시간
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#3fb1d3] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">평일</div>
                  <div className="text-gray-600 dark:text-gray-400">오전 9:00 - 오후 6:00</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">주말 및 공휴일</div>
                  <div className="text-gray-600 dark:text-gray-400">휴무</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#3fb1d3] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">점심시간</div>
                  <div className="text-gray-600 dark:text-gray-400">오후 12:00 - 1:00</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#3fb1d3] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">예약 상담</div>
                  <div className="text-gray-600 dark:text-gray-400">사전 예약 시 주말 가능</div>
                </div>
              </div>
            </div>
          </div>

          {/* Map & Location */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="p-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  오시는 길
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-[#3fb1d3] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white mb-1">지하철</div>
                      <p className="text-gray-600 dark:text-gray-400">
                        2호선 강남역 3번 출구 도보 5분<br />
                        신분당선 강남역 3번 출구 도보 5분
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-[#3fb1d3] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                    </svg>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white mb-1">버스</div>
                      <p className="text-gray-600 dark:text-gray-400">
                        간선: 146, 362, 740<br />
                        지선: 3422, 4318, 6411
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-[#3fb1d3] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white mb-1">주차</div>
                      <p className="text-gray-600 dark:text-gray-400">
                        건물 지하 주차장 이용 가능<br />
                        (방문 시 2시간 무료)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 dark:bg-gray-700 h-96 md:h-auto flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-500">
                    지도 영역<br />
                    (Kakao Map 또는 Google Maps 연동)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#3fb1d3] to-[#2c9ab4]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            더 자세한 상담이 필요하신가요?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            무료 진단을 통해 귀사에 맞는 최적의 솔루션을 제안해 드립니다.
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

