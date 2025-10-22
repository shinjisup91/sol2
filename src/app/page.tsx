'use client';

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-[#3fb1d3]/10 rounded-full">
                <span className="text-[#3fb1d3] font-semibold text-sm">기술 및 사업 설계 전문</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                여러분의 기업을<br />
                <span className="text-[#3fb1d3]">태양처럼</span> 빛나게
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Sol은 태양의 의미로, 각 기업 및 연구소, 대학 등을 태양처럼 밝게 빛나도록<br />
                그림자처럼 항상 곁에서 솔투(Sol2), 소금의 역할을 합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/consultation"
                  className="px-8 py-4 bg-[#3fb1d3] text-white rounded-lg font-semibold hover:bg-[#2c9ab4] transition-all duration-300 hover:shadow-xl hover:scale-105 text-center"
                >
                  무료 진단 신청하기
                </Link>
                <Link 
                  href="/services"
                  className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-[#3fb1d3] hover:text-[#3fb1d3] transition-all duration-300 text-center"
                >
                  서비스 살펴보기
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="https://picsum.photos/seed/business1/800/600"
                alt="Business consultation"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              핵심 역량
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              특허권, 저작권 컨설팅 및 IP 금융 전문 기업
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/about" className="group p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#3fb1d3] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">기술 설계</h3>
              <p className="text-gray-600 dark:text-gray-400">
                혁신적인 기술 설계로 귀사의 비전을 실현합니다.
              </p>
            </Link>

            <Link href="/about" className="group p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#3fb1d3] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">사업 설계</h3>
              <p className="text-gray-600 dark:text-gray-400">
                체계적인 사업 설계로 성공적인 시장 진입을 지원합니다.
              </p>
            </Link>

            <Link href="/services" className="group p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#3fb1d3] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">전략 컨설팅</h3>
              <p className="text-gray-600 dark:text-gray-400">
                특허권, 저작권 관련 전문 컨설팅을 제공합니다.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#3fb1d3] to-[#2c9ab4]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-white/90">프로젝트 수행</div>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">300+</div>
              <div className="text-white/90">특허 등록 지원</div>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">200+</div>
              <div className="text-white/90">기업 파트너</div>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-white/90">고객 만족도</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            귀사의 기술과 사업을 위한 맞춤형 컨설팅을 무료로 진단해 드립니다.
          </p>
          <Link 
            href="/consultation"
            className="inline-block px-12 py-4 bg-[#3fb1d3] text-white rounded-lg font-bold text-lg hover:bg-[#2c9ab4] transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            무료 진단 신청하기
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
