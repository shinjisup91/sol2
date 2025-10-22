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

    // ✅ 2️⃣ 이메일 발송 (SendGrid 사용)
    const emailData = {
      to: "info@sol2mireyun.com",
      from: process.env.SENDGRID_FROM_EMAIL || "noreply@sol2mireyun.com",
      subject: `[무료진단 신청] ${data.name}님의 상담 요청`,
      html: generateEmailTemplate(data),
    };

    if (process.env.SENDGRID_API_KEY) {
      try {
        const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${process.env.SENDGRID_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            personalizations: [{ to: [{ email: emailData.to }] }],
            from: { email: emailData.from },
            subject: emailData.subject,
            content: [{ type: "text/html", value: emailData.html }],
          }),
        });

        if (response.ok) {
          console.log("✅ 이메일 발송 완료:", data.email);
        } else {
          console.warn("⚠️ 이메일 발송 실패:", await response.text());
        }
      } catch (error) {
        console.warn("⚠️ 이메일 발송 중 오류:", error);
      }
    } else {
      console.warn("⚠️ SENDGRID_API_KEY 환경변수가 설정되지 않음");
    }

    // ✅ 3️⃣ Google Sheets 기록
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

    // ✅ 4️⃣ 성공 응답
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

// ✅ 이메일 템플릿
function generateEmailTemplate(data: ConsultationData): string {
  return `
    <html>
      <body style="font-family: 'Noto Sans KR', sans-serif; line-height: 1.6;">
        <h2>새로운 무료 진단 신청</h2>
        <p><b>이름:</b> ${data.name}</p>
        <p><b>이메일:</b> ${data.email}</p>
        <p><b>연락처:</b> ${data.phone || "-"}</p>
        <p><b>회사명:</b> ${data.company || "-"}</p>
        <p><b>업종:</b> ${data.industry || "-"}</p>
        <p><b>관심 서비스:</b> ${data.service || "-"}</p>
        <p><b>문의 내용:</b><br>${data.message}</p>
        <hr/>
        <p style="color:gray;">㈜ 솔투미래연 | 기술·특허·저작권 컨설팅</p>
      </body>
    </html>
  `;
}