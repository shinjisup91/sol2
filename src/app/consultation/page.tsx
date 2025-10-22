'use client';

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // API 호출 (다음 단계에서 구현)
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          industry: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            무료 진단 신청
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            귀사의 기술과 사업을 위한 맞춤형 컨설팅을 제공합니다
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl">
              <div className="w-16 h-16 bg-[#3fb1d3] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">100% 무료</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                진단 비용 없음<br/>부담 없이 시작하세요
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl">
              <div className="w-16 h-16 bg-[#3fb1d3] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">전문가 상담</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                10년 이상 경력의<br/>전문 컨설턴트 배정
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl">
              <div className="w-16 h-16 bg-[#3fb1d3] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">빠른 응답</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                영업일 기준 24시간 내<br/>연락 드립니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl">
            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  신청이 완료되었습니다!
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  빠른 시일 내에 담당자가 연락드리겠습니다.<br />
                  감사합니다.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="px-8 py-3 bg-[#3fb1d3] text-white rounded-lg font-semibold hover:bg-[#2c9ab4] transition-all duration-300"
                >
                  다시 신청하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      이름 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3fb1d3] focus:border-transparent outline-none transition-all dark:bg-gray-700 dark:text-white"
                      placeholder="홍길동"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      이메일 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3fb1d3] focus:border-transparent outline-none transition-all dark:bg-gray-700 dark:text-white"
                      placeholder="example@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      연락처 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3fb1d3] focus:border-transparent outline-none transition-all dark:bg-gray-700 dark:text-white"
                      placeholder="010-1234-5678"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      회사명
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3fb1d3] focus:border-transparent outline-none transition-all dark:bg-gray-700 dark:text-white"
                      placeholder="(주)회사명"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="industry" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      업종
                    </label>
                    <select
                      id="industry"
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3fb1d3] focus:border-transparent outline-none transition-all dark:bg-gray-700 dark:text-white"
                    >
                      <option value="">선택해주세요</option>
                      <option value="it">IT/소프트웨어</option>
                      <option value="bio">바이오/제약</option>
                      <option value="manufacturing">제조/산업</option>
                      <option value="semiconductor">반도체/전자</option>
                      <option value="research">대학/연구소</option>
                      <option value="other">기타</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      관심 서비스
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3fb1d3] focus:border-transparent outline-none transition-all dark:bg-gray-700 dark:text-white"
                    >
                      <option value="">선택해주세요</option>
                      <option value="ip-rights">지식재산 권리화</option>
                      <option value="analysis">환경 분석</option>
                      <option value="commercialization">기술 사업화</option>
                      <option value="reports">전략 보고서</option>
                      <option value="consultation">종합 컨설팅</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    문의 내용 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3fb1d3] focus:border-transparent outline-none transition-all resize-none dark:bg-gray-700 dark:text-white"
                    placeholder="컨설팅이 필요한 내용을 자세히 적어주세요"
                  />
                </div>

                {submitStatus === 'error' && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                    <p className="text-red-600 dark:text-red-400 text-sm">
                      신청 중 오류가 발생했습니다. 다시 시도해주세요.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#3fb1d3] text-white font-bold rounded-lg hover:bg-[#2c9ab4] transition-all duration-300 hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? '신청 중...' : '무료 진단 신청하기'}
                </button>

                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                  제출하신 정보는 안전하게 보관되며, 컨설팅 목적으로만 사용됩니다.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            진행 프로세스
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3fb1d3] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">신청서 제출</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                온라인 신청서를 작성하여 제출합니다
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#3fb1d3] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">담당자 배정</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                24시간 내 전문 컨설턴트 배정 및 연락
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#3fb1d3] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">무료 진단</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                현황 분석 및 맞춤형 솔루션 제안
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#3fb1d3] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">본 계약</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                제안 검토 후 계약 및 프로젝트 시작
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

