'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message);
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || '오류가 발생했습니다.');
      }
    } catch {
      setStatus('error');
      setMessage('서버와의 통신에 실패했습니다.');
    }
  };

  return (
    <div>
      {status === 'success' ? (
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-[#3fb1d3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-white text-lg font-semibold">{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일 주소를 입력하세요"
            required
            disabled={status === 'loading'}
            className="flex-1 px-6 py-4 rounded-lg outline-none focus:ring-2 focus:ring-white disabled:opacity-50"
          />
          <button 
            type="submit"
            disabled={status === 'loading'}
            className="px-8 py-4 bg-white text-[#3fb1d3] rounded-lg font-bold hover:bg-gray-100 transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? '처리중...' : '구독하기'}
          </button>
        </form>
      )}
      {status === 'error' && (
        <p className="text-white/90 text-center mt-4">{message}</p>
      )}
    </div>
  );
}

