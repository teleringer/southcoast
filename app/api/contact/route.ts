import { NextResponse } from "next/server";

function reqEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

export async function POST(req: Request) {
  // simple honeypot
  try {
    const body = await req.json();
    if ((body.company as string)?.trim()) {
      return NextResponse.json({ ok: true });
    }

    const RESEND_API_KEY = reqEnv("RESEND_API_KEY");
    const TO = reqEnv("CONTACT_TO");
    const FROM = reqEnv("CONTACT_FROM");

    const { name = "", email = "", phone = "", subject = "", message = "" } = body || {};
    const html = `
      <div style="font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif;line-height:1.5">
        <h2>New Contact Submission — SouthCoast.Legal</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g,"<br/>")}</p>
      </div>
    `;

    // lightweight send without SDK to keep it copy-paste simple
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        subject: subject || "New Contact — SouthCoast.Legal",
        html,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Resend error:", text);
      return NextResponse.json({ ok: false }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

function escapeHtml(v: string) {
  return (v || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
