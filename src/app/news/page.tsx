import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterForm from "@/components/NewsletterForm";

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      category: '공지사항',
      title: '2025년 상반기 특허 출원 지원 사업 안내',
      excerpt: '중소기업 및 스타트업을 위한 특허 출원 비용 지원 사업이 시작됩니다. 신청 기간 및 자격 요건을 확인하세요.',
      date: '2025-01-15',
      image: 'https://picsum.photos/seed/news1/800/600',
      author: '관리자',
      views: 1240
    },
    {
      id: 2,
      category: '뉴스',
      title: 'AI 기술 특허 출원, 전년 대비 200% 증가',
      excerpt: '인공지능 관련 특허 출원이 급증하면서 기업들의 IP 전략 수립이 더욱 중요해지고 있습니다.',
      date: '2025-01-10',
      image: 'https://picsum.photos/seed/news2/800/600',
      author: '김솔투',
      views: 2350
    },
    {
      id: 3,
      category: '칼럼',
      title: '성공적인 기술 사업화를 위한 5가지 전략',
      excerpt: '연구 개발은 성공했지만 사업화에 실패하는 경우가 많습니다. 전문가가 알려주는 기술 사업화 성공 전략을 소개합니다.',
      date: '2025-01-05',
      image: 'https://picsum.photos/seed/news3/800/600',
      author: '이미래',
      views: 3120
    },
    {
      id: 4,
      category: '사례',
      title: 'A 바이오, 특허 포트폴리오 구축으로 시리즈 B 투자 유치 성공',
      excerpt: '체계적인 IP 관리와 특허 포트폴리오 구축을 통해 200억원 규모의 투자 유치에 성공한 사례를 공유합니다.',
      date: '2025-01-03',
      image: 'https://picsum.photos/seed/news4/800/600',
      author: '박연구',
      views: 1890
    },
    {
      id: 5,
      category: '뉴스',
      title: '2024년 국내 특허 등록 건수, 역대 최고치 경신',
      excerpt: '지난해 국내 특허 등록 건수가 역대 최고를 기록하며 혁신 활동이 활발해지고 있습니다.',
      date: '2024-12-28',
      image: 'https://picsum.photos/seed/news5/800/600',
      author: '관리자',
      views: 4560
    },
    {
      id: 6,
      category: '칼럼',
      title: 'Patent Map 작성으로 R&D 방향 설정하기',
      excerpt: '특허 맵 분석을 통해 경쟁사 동향을 파악하고 효과적인 연구개발 전략을 수립하는 방법을 알아봅니다.',
      date: '2024-12-20',
      image: 'https://picsum.photos/seed/news6/800/600',
      author: '김솔투',
      views: 2780
    }
  ];

  const categories = ['전체', '공지사항', '뉴스', '칼럼', '사례'];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            뉴스 & 인사이트
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            최신 IP 업계 동향과 전문가 칼럼을 만나보세요
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-[#3fb1d3] hover:text-[#3fb1d3] transition-colors font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <Link 
                key={item.id} 
                href={`/news/${item.id}`}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-[#3fb1d3] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {item.date}
                    <span className="mx-2">·</span>
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {item.views.toLocaleString()}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#3fb1d3] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{item.author}</span>
                    <span className="text-[#3fb1d3] font-medium text-sm group-hover:translate-x-1 transition-transform">
                      자세히 보기 →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12 space-x-2">
            <button className="w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-[#3fb1d3] hover:text-white hover:border-[#3fb1d3] transition-colors">
              ←
            </button>
            <button className="w-10 h-10 rounded-lg bg-[#3fb1d3] text-white flex items-center justify-center">
              1
            </button>
            <button className="w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-[#3fb1d3] hover:text-white hover:border-[#3fb1d3] transition-colors">
              2
            </button>
            <button className="w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-[#3fb1d3] hover:text-white hover:border-[#3fb1d3] transition-colors">
              3
            </button>
            <button className="w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-[#3fb1d3] hover:text-white hover:border-[#3fb1d3] transition-colors">
              →
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#3fb1d3] to-[#2c9ab4]">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            뉴스레터 구독하기
          </h2>
          <p className="text-lg text-white/90 mb-8">
            IP 업계의 최신 소식과 전문가 인사이트를 이메일로 받아보세요
          </p>
          <NewsletterForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}

