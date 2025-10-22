import { NextRequest, NextResponse } from "next/server";

interface ConsultationData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  industry?: string;
  service?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ConsultationData = await request.json();

    // ✅ 1️⃣ 기본 유효성 검사
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "필수 항목을 모두 입력해주세요." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "유효한 이메일 주소를 입력해주세요." },
        { status: 400 }
      );
    }

    // ✅ 2️⃣ Google Sheets 기록
    const SHEET_WEBAPP_URL = process.env.SHEET_WEBAPP_URL;
    if (SHEET_WEBAPP_URL) {
      try {
        await fetch(SHEET_WEBAPP_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        console.log("✅ Google Sheets 기록 완료:", data.name);
      } catch (error) {
        console.warn("⚠️ Google Sheets 기록 중 오류:", error);
      }
    } else {
      console.warn("⚠️ SHEET_WEBAPP_URL 환경변수가 설정되지 않음");
    }

    // ✅ 3️⃣ 성공 응답
    return NextResponse.json(
      {
        success: true,
        message: "신청이 완료되었습니다. 담당자가 연락드리겠습니다.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ 상담 신청 처리 중 오류:", error);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요." },
      { status: 500 }
    );
  }
}
