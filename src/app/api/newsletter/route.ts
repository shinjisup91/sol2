import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    
    // 이메일 유효성 검사
    if (!email) {
      return NextResponse.json(
        { error: '이메일 주소를 입력해주세요.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '유효한 이메일 주소를 입력해주세요.' },
        { status: 400 }
      );
    }

    // 여기서 실제 뉴스레터 구독 로직 구현
    // 예: Mailchimp, SendGrid Lists, ConvertKit 등 사용
    
    console.log('새로운 뉴스레터 구독:', {
      email,
      timestamp: new Date().toISOString()
    });

    // 실제 프로덕션에서는 메일링 서비스 사용
    // await subscribeToNewsletter(email);

    return NextResponse.json(
      { 
        success: true,
        message: '뉴스레터 구독이 완료되었습니다!' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('뉴스레터 구독 처리 중 오류:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' },
      { status: 500 }
    );
  }
}

