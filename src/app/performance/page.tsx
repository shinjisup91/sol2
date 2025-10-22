import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PerformancePage() {
  const projects = [
    {
      title: '기술 특허 포트폴리오 구축',
      description: '글로벌 IT 기업의 핵심 기술 특허 포트폴리오 구축 및 권리화 지원',
      category: 'IT/소프트웨어',
      year: '2024',
      image: 'https://picsum.photos/seed/project1/600/400'
    },
    {
      title: '기술거래 및 사업화',
      description: '바이오 벤처의 핵심 기술 이전 및 라이센싱 계약 체결 지원',
      category: '바이오/제약',
      year: '2024',
      image: 'https://picsum.photos/seed/project2/600/400'
    },
    {
      title: 'IP 금융 컨설팅',
      description: '제조 기업의 지식재산 기반 투자 유치 및 가치 평가 지원',
      category: '제조/산업',
      year: '2023',
      image: 'https://picsum.photos/seed/project3/600/400'
    },
    {
      title: '특허 맵 분석 프로젝트',
      description: '반도체 분야 특허 동향 분석 및 R&D 전략 수립',
      category: '반도체/전자',
      year: '2023',
      image: 'https://picsum.photos/seed/project4/600/400'
    },
    {
      title: '해외 특허 출원 지원',
      description: 'PCT 국제 특허 출원 및 해외 진출 전략 수립',
      category: 'IT/소프트웨어',
      year: '2023',
      image: 'https://picsum.photos/seed/project5/600/400'
    },
    {
      title: '기술 사업화 전략',
      description: '대학 연구소의 기술 이전 및 스타트업 창업 지원',
      category: '대학/연구소',
      year: '2022',
      image: 'https://picsum.photos/seed/project6/600/400'
    }
  ];

  const testimonials = [
    {
      company: 'A 테크놀로지',
      industry: 'IT/소프트웨어',
      content: '솔투미래연의 전문적인 특허 전략 덕분에 핵심 기술을 안전하게 보호할 수 있었습니다. 체계적인 IP 포트폴리오 구축으로 투자 유치에도 큰 도움이 되었습니다.',
      author: '김○○ 대표',
      rating: 5
    },
    {
      company: 'B 바이오',
      industry: '바이오/제약',
      content: '기술거래 과정에서 발생할 수 있는 리스크를 사전에 파악하고 대응할 수 있도록 도와주셨습니다. 전문성과 신뢰성이 돋보이는 파트너입니다.',
      author: '이○○ 연구소장',
      rating: 5
    },
    {
      company: 'C 산업',
      industry: '제조/산업',
      content: 'IP 금융 컨설팅을 통해 보유 특허의 가치를 정확히 평가받고, 이를 기반으로 성공적인 투자 유치를 이룰 수 있었습니다.',
      author: '박○○ 이사',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            실적 및 성과
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            다양한 산업 분야에서 축적된 전문 경험
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl">
              <div className="text-5xl font-bold text-[#3fb1d3] mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">프로젝트 수행</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl">
              <div className="text-5xl font-bold text-[#3fb1d3] mb-2">300+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">특허 등록 지원</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl">
              <div className="text-5xl font-bold text-[#3fb1d3] mb-2">200+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">기업 파트너</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl">
              <div className="text-5xl font-bold text-[#3fb1d3] mb-2">95%</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">고객 만족도</div>
            </div>
          </div>

          {/* Projects Gallery */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              주요 프로젝트
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group cursor-pointer bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-[#3fb1d3] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.year}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-[#3fb1d3] font-semibold mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              고객 후기
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
                  <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                    <div className="font-bold text-gray-900 dark:text-white">{testimonial.company}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.industry}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">{testimonial.author}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#3fb1d3] to-[#2c9ab4]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            귀사의 성공 스토리를 함께 만들어갑니다
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            전문 컨설턴트가 귀사의 목표 달성을 위한 최적의 솔루션을 제안합니다.
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

