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
    if (process.env.SENDGRID_API_KEY) {
      try {
        const emailHtml = generateEmailTemplate(data);
        const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${process.env.SENDGRID_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            personalizations: [
              { 
                to: [{ email: "shinjisup@gmail.com" }] 
              }
            ],
            from: { 
              email: process.env.SENDGRID_FROM_EMAIL || "noreply@sol2mireyun.com",
              name: "솔투미래연"
            },
            subject: `[무료진단 신청] ${data.name}님의 상담 요청`,
            content: [
              { 
                type: "text/html", 
                value: emailHtml 
              }
            ],
          }),
        });

        if (response.ok) {
          console.log("✅ 이메일 발송 완료:", data.email);
        } else {
          const errorText = await response.text();
          console.warn("⚠️ 이메일 발송 실패:", errorText);
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
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body {
            font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            border-radius: 10px 10px 0 0;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .content {
            background: #f9f9f9;
            padding: 30px;
            border-radius: 0 0 10px 10px;
          }
          .info-row {
            margin: 15px 0;
            padding: 12px;
            background: white;
            border-radius: 5px;
            border-left: 4px solid #667eea;
          }
          .label {
            font-weight: bold;
            color: #667eea;
            display: inline-block;
            min-width: 120px;
          }
          .value {
            color: #333;
          }
          .message-box {
            background: white;
            padding: 20px;
            border-radius: 5px;
            margin-top: 20px;
            border: 1px solid #e0e0e0;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 2px solid #e0e0e0;
            color: #666;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🎯 새로운 무료 진단 신청</h1>
        </div>
        <div class="content">
          <div class="info-row">
            <span class="label">👤 이름:</span>
            <span class="value">${data.name}</span>
          </div>
          <div class="info-row">
            <span class="label">📧 이메일:</span>
            <span class="value">${data.email}</span>
          </div>
          ${data.phone ? `
          <div class="info-row">
            <span class="label">📱 연락처:</span>
            <span class="value">${data.phone}</span>
          </div>
          ` : ''}
          ${data.company ? `
          <div class="info-row">
            <span class="label">🏢 회사명:</span>
            <span class="value">${data.company}</span>
          </div>
          ` : ''}
          ${data.industry ? `
          <div class="info-row">
            <span class="label">🏭 업종:</span>
            <span class="value">${data.industry}</span>
          </div>
          ` : ''}
          ${data.service ? `
          <div class="info-row">
            <span class="label">💼 관심 서비스:</span>
            <span class="value">${data.service}</span>
          </div>
          ` : ''}
          <div class="message-box">
            <div class="label" style="display: block; margin-bottom: 10px;">💬 문의 내용:</div>
            <div class="value" style="white-space: pre-wrap;">${data.message}</div>
          </div>
        </div>
        <div class="footer">
          <p><strong>㈜ 솔투미래연</strong></p>
          <p>기술·특허·저작권 컨설팅</p>
        </div>
      </body>
    </html>
  `;
}
